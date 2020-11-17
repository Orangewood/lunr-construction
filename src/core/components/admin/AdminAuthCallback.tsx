import React, { useEffect } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import Loader from "../../../common/components/Loader";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getQuery } from '../../../utils/helper';
import API from '../../api'
import actions from '../../../redux/actions';
const { setToken, setUserAuthenticated }  = actions;


const  AdminAuthCallback = (props): JSX.Element => {
    const history = useHistory();
    const query = getQuery(props?.location?.search)

    useEffect(()=>{
        const code = query.get('code'), state = query.get('state');
        if(!code || !state || state !== 'MY_STATE'){
            history.push('/')
            return;
        }
        
        async function getToken(){
            const response = await API.getTokenFromCode({ code, state }).catch(err => console.log(err) )
            if(response){
                await props?.setToken(response.data)
                props?.setUserAuthenticated(true);
                history.push('/dashboard');
            }else{
                history.push('/')
            }
        }
        getToken()
    },[]);


  return (
    <>
          <BackgroundContainer solid />
          <InformationContainer wrapper>
            <Loader/>
          </InformationContainer>
        </>
      
  );
}

const mapDispatchToProps = {
    setToken,
    setUserAuthenticated
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuthCallback);
