import React, {useState} from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import "../../scss/admin/Admin.scss";
import { connect } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';

import actions from '../../../redux/actions';
const { selectBgImage }  = actions;

const  Background = (props) => {
  const history = useHistory();
  const [background , setBackground] = useState(props?.admin?.background || null);

  const saveBackgroundImage = () => {
    props.selectBgImage(background)
    history.push('/dashboard');
  }

  const backgroundImage = async (e:any) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      setBackground(base64);
    });

   
  };
   
  const getBase64 = async (file:any) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }


  
  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
        <div className="mb-5">
          <Link 
              className="custom-button-small custom-button-blue position-relative" 
              to={{pathname: '/dashboard',}}>
                <span className='button-text'>Back</span>
          </Link>
        </div>
        <form>
          <div>
            <label className="d-block">Upload Background Image *</label>
            {background &&  
              <div className="mb-3">
                  <div className="mb-1">
                    <img src={background} height="200" alt="background"/>
                  </div>
                  <a className="text-primary" onClick={() => setBackground(null)}>Remove</a>
              </div>
            }
            <input 
              type="file" 
              id="imageFile" 
              name='imageFile' 
              onChange= {backgroundImage}
              required
            />
          </div>
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={saveBackgroundImage}
          />
        </form>
      </InformationContainer>
    </>
  );
}
const mapDispatchToProps = {
  selectBgImage
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(Background);