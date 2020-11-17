import React, { useEffect, useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import Loader from "../../../common/components/Loader";
import Logo from "../../../common/components/Logo";
import Modal from "../../../common/components/Modal";
import ClockOutHeader from "./components/ClockOutHeader";
import ClockScreenBody from "./components/ClockScreenBody";
import "../../scss/kiosk/Kiosk.scss";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import API from '../../api'
import actions from '../../../redux/actions';
const { setUserId }  = actions;

const ClockScreen = (props) => {
  const history = useHistory();
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [loaderMessage, setLoaderMessage] = useState<string>("Getting your timesheet details...");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showIdolModal, setShowIdolModal] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [ weekTotal, setWeekTotal ] = useState<string>('')
  const [ currentData, setCurrentData ] = useState<any>(null)
  const [ clockTime, setClockTime ] = useState<any>(null)

  useEffect(() => {
    if(!props?.user?.userId){
      history.push('/kiosk-home')
    }

    let idealTime = 0;
    const timer = setInterval(() => {
      if(idealTime === 3){
        setShowIdolModal(true)
        idealTime = 0;
        return;
      }
      idealTime++;
    }, 6000); //Every 1 min

    window.addEventListener('mousemove', () => {
      idealTime = 0;
    })
    window.addEventListener('click', () => {
      idealTime = 0;
    })
    window.addEventListener('keypress', () => {
      idealTime = 0;
    })

    const getTimesheetDetails = async () => {
      const today = moment();
      const from_date = moment().startOf('isoWeek');
      const to_date = moment().endOf('isoWeek');

      //Get timesheet for user and foreman
      const response = await API.getTimeSheet({
        start_date : from_date.format('YYYY-MM-DD'),
        end_date : to_date.format('YYYY-MM-DD'),
        user_ids : props?.user?.userId,
        jobcode_ids : props?.admin?.jobcode?.value
      }).catch(err => console.log(err))
      if(response && response?.data){
        const data = response?.data?.results?.timesheets;
        const timeSheetIds = Object.keys(data)
        //Week logic
        if(timeSheetIds){
          let weekTotal = 0;
          timeSheetIds.forEach(id => {weekTotal += data[id].duration;})
          setWeekTotal(`${(weekTotal / 3600).toFixed()} hr : ${((weekTotal % 3600) / 60).toFixed()} min`);
        }

        //Today logic
        const currentTimeSheetId = timeSheetIds.find(id => data[id].date === today.format('YYYY-MM-DD'))
        if(currentTimeSheetId) setCurrentData(data[currentTimeSheetId])
      }
      setShowLoader(false)
    }
    getTimesheetDetails()
    
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const user = props?.admin?.users.find(user => user.value === props?.user?.userId);  

  const onBackToHome = () => {
    props.setUserId(null);
    history.push('/kiosk-home');
  }

  const onClockIn = async () => {
    setError(false);
    const clockTime = moment();
    
    setClockTime(clockTime.format('hh:mm:ss:A'))
    setLoaderMessage("Checking you in. Please wait...")
    setShowLoader(true)
    //Create timesheet for today
    const response = await API.createTimesheet({
      "data": [
        {
          "user_id": props?.user?.userId,
          "jobcode_id": props?.admin?.jobcode?.value,
          "type": "regular",
          "start": clockTime.format("YYYY-MM-DDTHH:mm:ssZ"),
          "end": clockTime.format("YYYY-MM-DDTHH:mm:ssZ"),
        }
      ]
    }).catch(err => {
      console.log(err);
      setError(true)
    })

    if(response && response?.data){
      if(response?.data?.results?.timesheets[1] && response.data?.results?.timesheets[1]._status_code !== 200){
        console.log(response?.data?.results?.timesheets[1]);
        setError(true)
      }
    }
    setShowLoader(false)
    setShowModal(true)
  }

  const onClockOut = async () => {
    setError(false);
    let clockTime = moment();
    if(props?.admin?.maxClockOutTime){
      const maxClockTime = moment(props?.admin?.maxClockOutTime,'HH:mm')
      if(clockTime.isSameOrAfter(maxClockTime)){
        clockTime = maxClockTime;
      }
    }

    setClockTime(clockTime.format('hh:mm:ss:A'))
    setLoaderMessage("Clock out under progress. Please wait...")
    setShowLoader(true)

    //Update today's timesheet
    const response = await API.updateTimesheet({
      "data": [
        {
          "id": currentData.id,
          "jobcode_id": currentData.jobcode_id,
          "end": clockTime.format("YYYY-MM-DDTHH:mm:ssZ"),
        }
      ]
    }).catch(err => {
      console.log(err);
      setError(true)
    })

    if(response && response?.data){
      if(response?.data?.results?.timesheets[1] && response.data?.results?.timesheets[1]._status_code !== 200){
        console.log(response?.data?.results?.timesheets[1]);
        setError(true)
      }
    }
    setShowLoader(false)
    setShowModal(true)
  }

  const clockIn = !currentData;
  let dayTotal = '0';
  if(currentData?.start){
    const start = moment(currentData?.start)
    let now = moment();
    if(props?.admin?.maxClockOutTime){
      const maxClockTime = moment(props?.admin?.maxClockOutTime,'HH:mm')
      if(now.isSameOrAfter(maxClockTime)){
        now = maxClockTime;
      }
    }
    dayTotal = `${moment.utc(now.diff(start)).format("HH")} hr : ${moment.utc(now.diff(start)).format("mm")} min`
  }
  return (
    <>
      {showLoader && <Loader fullPage content={loaderMessage}/>}
      <Logo/>
      <BackgroundContainer nested />
      <div id="clock-screen">
        <ClockOutHeader dayTotal={dayTotal} weekTotal={weekTotal} />
        <InformationContainer clock>
          <ClockScreenBody 
            clockIn={clockIn}
            jobcode={props?.admin?.jobcode}
            user={user}
          />
          <div className="button-wrapper">
            {clockIn ?
              <CustomButton
                id='clock-screen-button'
                text={"Clock In"}
                color={ButtonColors.orange}
                onClickedButton={onClockIn}
              />
              :
              <CustomButton
                id='clock-screen-button'
                text={"Clock Out"}
                color={ButtonColors.orange}
                onClickedButton={onClockOut}
              />
            }
            <CustomButton
              id='clock-screen-button-home'
              text={"Back to Home"}
              color={ButtonColors.blue}
              onClickedButton={onBackToHome}
            />
          </div>
        </InformationContainer>

        <Modal
            key="showModal"
            button1={{
                text : 'Sign me out',
                onClick : onBackToHome,
                color : 'blue'
            }}
            modalClose = {onBackToHome}
            showModal = {showModal}
            modalBody = {
              <div>
              {(!error && clockIn) && (
                <>
                  <p> You <span className="text-success">clocked in</span> at
                    <br />
                    {clockTime}
                  </p>
                </>
              )}
              {(!error && !clockIn) && (
                <p>
                  You <span className="text-danger">clocked out</span> at
                  <br />
                  {clockTime}
                </p>
              )}
              {error && (
                <p>
                  You are <span className="text-danger">NOT</span> clocked {clockIn ? 'in' : 'out'}. 
                  <br />Please call your supervisor.
                </p>
              )}
              </div>
            }
        />
        <Modal
            key="showIdolModal"
            button1={{
                text : 'Sign me out',
                onClick : onBackToHome,
                color : 'orange'
            }}
            button2={{
                text : "Yes, I'm here",
                onClick : () => setShowIdolModal(false),
                color : 'green'
            }}
            modalClose = {() => setShowIdolModal(false)}
            showModal = {showIdolModal}
            modalBody = {
                <p>Are you still there?</p>
            }
        />
      </div>
    </>
  );
}
const mapDispatchToProps = {
  setUserId
};

const mapStateToProps = (state) => ({ admin: state.admin, user : state.user });

export default connect(mapStateToProps, mapDispatchToProps)(ClockScreen);
