import React from "react";
import { useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

import Select from 'react-select'
import { lightStyles } from '../../../../utils/selectStyle'

import actions from '../../../../redux/actions';
const { setUserId }  = actions;

const CustomOption = (props) => {
  return !props.isDisabled ? (
      <div {...props.innerProps} className="user-list-option d-flex align-items-center">
        <div className="user-image" style={{ backgroundImage : `url(${props?.data?.profile_image_url})`}}></div>
        <div className="text-left">
          <div className="user-name">{props.label}</div>
          <div className="user-group">{props.data.group}</div>
        </div>
      </div>
  ) : null;
}

const CameraScreenBody = (props)=> {
  const history = useHistory();
  const currentTime = new Date();

  const handleOnChange = (newValue:any) => {
    props.setUserId(newValue.value);
    history.push('/kiosk-check');
  }
  return (
    <div className='camera-screen-body'>
      <p id='camera-screen-welcome-text'>
        {`Welcome to`} <br />
        {props?.admin?.jobcode?.label}
      </p>
      <div className="mb-5 d-flex time-section align-items-center justify-content-center">
        <div className="mr-2">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
        <div>
            {currentTime.toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
        </div>
      </div>
      <Select 
        isClearable
        styles={lightStyles} 
        isSearchable={true} 
        options={props?.admin?.users}
        onChange={handleOnChange}
        components={{ Option: CustomOption }}
        maxMenuHeight={150}
        placeholder="Enter your name"
      >
      </Select>
    </div>
  );
}
const mapDispatchToProps = {
  setUserId
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreenBody);

