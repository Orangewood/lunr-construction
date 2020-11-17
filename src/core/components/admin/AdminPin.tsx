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
const { setAdminPin }  = actions;

const  AdminPin = (props) => {
  const history = useHistory();
  const [pin , setPin ] = useState('');

  const handleOnchange = (e: any) => {
    setPin(e.target.value);
  };

  const savePin = () => {
    props.setAdminPin(pin)
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
            <input type="password" className="form-control" placeholder="Enter 4 digit pin" maxLength={4} minLength={4} value={pin} onChange={handleOnchange}></input>
          </div>
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={savePin}
          />
        </form>
      </InformationContainer>
    </>
  );
}

const mapDispatchToProps = {
  setAdminPin
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(AdminPin);
