import React, { useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import "../../scss/admin/Admin.scss";
import { connect } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';

import actions from '../../../redux/actions';
const { setForemanInfo }  = actions;

const Foreman = (props) => {
  
  const [firstName, setFirstName] = useState<string>(props?.admin?.foremanInfo?.firstName);
  const [lastName, setLastName] = useState<string>(props?.admin?.foremanInfo?.lastName);
  const [phoneNumber, setPhoneNumber] = useState<string>(props?.admin?.foremanInfo?.phoneNumber);
  const [profilePicture, setProfileImage] = useState(props?.admin?.foremanInfo?.profilePicture);

  const profileImage = async (e:any) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      setProfileImage(base64);
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
  
  const history = useHistory();

  const saveForemanInfo = () => {
    props.setForemanInfo({
      firstName,
      lastName,
      phoneNumber,
      profilePicture
    })
    history.push('/dashboard');
  }
 
  return (
    <>
      <BackgroundContainer split />
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
            <div className="mb-5">
              <label className="d-block">Upload Profile Image *</label>
              {profilePicture &&  
                <div className="mb-3">
                    <div className="mb-1">
                      <img src={profilePicture} height="100" alt="profilePicture"/>
                    </div>
                    <a className="text-primary" onClick={() => setProfileImage(null)}>Remove</a>
                </div>
              }
              <input 
                type="file" 
                id="imageFile" 
                name='imageFile' 
                onChange= {profileImage}
                required
              />
            </div>

            <div className="mb-5">
              <h5 className="mb-3">Personal Information</h5>
              <div className="row">
                <div className="col-6">
                  <label className="d-block">First Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={props?.admin?.foremanInfo?.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="d-block">Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={props?.admin?.foremanInfo?.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
            <h5 className="mb-3">Contact Information</h5>
            <div className="mb-2">
              <label className="d-block">Phone Number *</label>
              <input
                type="text"
                className="form-control"
                value={props?.admin?.foremanInfo?.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          </div>
          
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={saveForemanInfo}
          />
        </form>
      </InformationContainer>
    </>
  );
}

const mapDispatchToProps = {
  setForemanInfo
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(Foreman);
