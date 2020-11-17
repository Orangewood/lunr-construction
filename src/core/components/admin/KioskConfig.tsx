import React ,{useState} from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import "../../scss/admin/Admin.scss";
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from '../../../redux/actions';
const { setMaxClockOutTime }  = actions;

const  KioskConfig = (props) => {
  const history = useHistory();
  const [value , setValue ] = useState(props?.admin?.maxClockOutTime);

  const handleOnchange = (e: any) => {
    setValue(e.target.value);
  };
  
  const save = () => {
    props.setMaxClockOutTime(value)
    history.push('/dashboard');
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
            <label className="d-block">Set Admin Pin *</label>
            <input type="time" className="form-control" value={value} onChange={handleOnchange}></input>
          </div>
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={save}
          />
        </form>
      </InformationContainer>
    </>
  );
}

const mapDispatchToProps = {
    setMaxClockOutTime
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(KioskConfig);