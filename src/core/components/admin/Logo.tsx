import React , {useState} from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import "../../scss/admin/Admin.scss";
import { connect } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';

import actions from '../../../redux/actions';
const { selectLogo }  = actions;

const  Logo = (props) => {
  const history = useHistory();
  const [logo , setLogo] =useState(props?.admin?.logo);

  const saveLogo = async (e:any) =>{
    props.selectLogo(logo);
    history.push('/dashboard');
  }

  const logoImage = async (e:any) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      setLogo(base64);
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
            <label className="d-block">Upload Logo *</label>
            {logo &&  
              <div className="mb-3">
                  <div className="mb-1">
                    <img src={logo} height="100" alt="logo"/>
                  </div>
                  <a className="text-primary" onClick={() => setLogo(null)}>Remove</a>
              </div>
            }
            <input 
              type="file" 
              id="imageFile" 
              name='imageFile' 
              onChange= {logoImage}
              required
            />
          </div>
          <CustomButton
            id={"client-save"}
            color={ButtonColors.orange}
            text={"Save Changes"}
            onClickedButton={saveLogo}
          />
        </form>
      </InformationContainer>
    </>
  );
}
const mapDispatchToProps = {
  selectLogo
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(Logo);