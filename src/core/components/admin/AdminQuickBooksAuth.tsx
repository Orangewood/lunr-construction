import React, { useEffect } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import CustomButton, { ButtonColors } from "../../../common/components/CustomButton";
import config from '../../../utils/config';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuickBooks from "../../images/Quickbooks.svg";

const  AdminQuickBooksAuth = (props): JSX.Element => {
    const history = useHistory();
    const checkAuth = async () => {
        window.location.href = `${config.API_URL}${config.GET_OAUTH}`
    }

    useEffect(()=>{
        if(props?.admin?.token){
            history.push('/signin')
        }
    },[]);


  return (
    <>
          <BackgroundContainer solid />
          <InformationContainer wrapper>
            <div className='authorize-container' id='authorize-container'>
              <h3>Authorize through</h3>
              <div id='quickbooks-container'>
                <img id='quickbooks-logo' src={QuickBooks} alt="quickbooks-logo"/>
              </div>
            </div>
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <CustomButton
                  id='authorize-button'
                  text={"Sign In"}
                  color={ButtonColors.blue}
                  onClickedButton={checkAuth}
                />
              </div>
            </div>
          </InformationContainer>
        </>
      
  );
}

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps)(AdminQuickBooksAuth);
