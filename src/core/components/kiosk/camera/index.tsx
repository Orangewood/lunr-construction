import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { camvas } from './assets/camvas.js'
import pico from './assets/pico'
import API from '../../../api'
import actions from '../../../../redux/actions';
import Modal from '../../../../common/components/Modal';
const { setUserId }  = actions;


const Camera = (props) => {
    const history = useHistory();
    let ctx, mycamvas, faceDetected = 0;
    let [face, setFace] = useState('');
    let [user404, setUser404] = useState(false);

    const update_memory = pico.instantiate_detection_memory(5); // we will use the detecions of the last 5 frames
    let facefinder_classify_region = function(r, c, s, pixels, ldim) {return -1.0;};

    const initCamera = async () => {
        /*
            (1) prepare the pico.js face detector
        */
       const cascadeurl = 'https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder';
       const response = await fetch(cascadeurl).catch(err => console.log(err))
       if(response){
            const buffer = await response.arrayBuffer().catch(err => console.log(err))
            if(buffer){
                const bytes = new Int8Array(buffer);
                facefinder_classify_region = pico.unpack_cascade(bytes);
                console.log('* cascade loaded');
            }
       }

        /*
            (2) get the drawing context on the canvas and define a function to transform an RGBA image to grayscale
        */
        ctx = document.getElementsByTagName('canvas')[0].getContext('2d');

        /*
            (4) instantiate camera handling (see https://github.com/cbrandolino/camvas)
        */
        mycamvas = new camvas(ctx, processfn);
        /*
            (5) it seems that everything went well
        */
       props?.setLoading(false);
        // initialized = true;
    }

    const rgba_to_grayscale = (rgba, nrows, ncols) => {
        const gray = new Uint8Array(nrows*ncols);
        for(var r=0; r<nrows; ++r)
            for(var c=0; c<ncols; ++c)
                // gray = 0.2*red + 0.7*green + 0.1*blue
                gray[r*ncols + c] = (2*rgba[r*4*ncols+4*c+0]+7*rgba[r*4*ncols+4*c+1]+1*rgba[r*4*ncols+4*c+2])/10;
        return gray;
    }

    const processfn = (video, dt) => {
        /*
            (3) this function is called each time a video frame becomes available
        */

        // render the video frame to the canvas element and extract RGBA pixel data
        ctx.drawImage(video, 0, 0);
        const rgba = ctx.getImageData(0, 0, 640, 480).data;
        // prepare input to `run_cascade`
        const image = {
            "pixels": rgba_to_grayscale(rgba, 480, 640),
            "nrows": 480,
            "ncols": 640,
            "ldim": 640
        }
        const params = {
            "shiftfactor": 0.1, // move the detection window by 10% of its size
            "minsize": 100,     // minimum size of a face
            "maxsize": 1000,    // maximum size of a face
            "scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
        }
        // run the cascade over the frame and cluster the obtained detections
        // dets is an array that contains (r, c, s, q) quadruplets
        // (representing row, column, scale and detection score)
        let dets = pico.run_cascade(image, facefinder_classify_region, params);
        dets = update_memory(dets);
        dets = pico.cluster_detections(dets, 0.2); // set IoU threshold to 0.2
        // draw detections
        for(let i=0; i<dets.length; ++i){
            // check the detection score
            // if it's above the threshold, draw it
            // (the constant 50.0 is empirical: other cascades might require a different one)
            if(dets[i][3]>50.0)
            {
                faceDetected++;
                if(faceDetected === 100){
                    //Face Detected
                    console.log('Face detected')
                    setFace(ctx?.canvas?.toDataURL("image/jpeg"));
                    mycamvas.destroy();
                    aunthenticateUser(ctx?.canvas?.toDataURL("image/jpeg"))
                }
                

                ctx.beginPath();
                ctx.arc(dets[i][1], dets[i][0], dets[i][2]/2, 0, 2*Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
        }
    }

    const aunthenticateUser = async (faceImage) => {
        props?.setLoading(true);
        let response = await API.authenticateFace(faceImage).catch(err => console.log(err))
        if(response){
            if(response?.data?.tSheetId){
                props.setUserId(response?.data?.tSheetId);
                history.push('/kiosk-check');
                return;
            }
            setUser404(true);
            props?.setLoading(false);
        }
    }

    const resetCamera = () => {
        setUser404(false)
        setFace('');
        faceDetected = 0;
        initCamera();
    }

    useEffect(()=>{
        props?.setLoading(false);
        initCamera();
    },[]);

    return (
        <>
            {face ?
                <div className="face-image" style={{ backgroundImage : `url(${face})`}}></div>
                :
                <canvas id="camera-canvas" width="640" height="480"></canvas>
            }
            {/* {user404 &&
                <div className="info-404">
                    <p>Sorry this user was not found in the system.</p>
                    <p className="mb-0">Please <a onClick={resetCamera} className="text-primary text-underline">retake</a> or <a onClick={() => setUser404(false)} className="text-primary text-underline">select manually.</a></p>
                </div>
            } */}
            <Modal
                button1={{
                    text : 'Retry',
                    onClick : resetCamera,
                    color : 'orange'
                }}
                button2={{
                    text : 'Select manually',
                    onClick : () => setUser404(false),
                    color : 'blue'
                }}
                modalClose = {resetCamera}
                showModal = {user404}
                modalBody = {
                    <p>Sorry this user was not found in the system.</p>
                }
            />
        </>
    )
}

const mapDispatchToProps = {
    setUserId
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(Camera);