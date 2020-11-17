import TYPE from '../types/admin-type';
import api from '../../core/api'

const setToken = (tokenData) => (dispatch) => {
  dispatch({
    type: TYPE.SET_TOKEN,
    payload: tokenData,
  });
  return api.initHeaders(tokenData.access_token)
}

const setSigninPin = (pin) => (dispatch) => {
  dispatch({
    type: TYPE.SET_PIN,
    payload: pin,
  });
}

const setUserAuthenticated = (value) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TYPE.SIGN_IN,
      payload: value,
    });
    resolve(true);
  })
}

const selectClient = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SELECT_CLIENT,
    payload: value,
  });
}

const selectJobcode = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SELECT_JOBCODE,
    payload: value,
  });
}

const selectBgImage = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SET_BACKGROUND,
    payload: value,
  });
}

const selectLogo = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SET_LOGO,
    payload: value,
  });
}

const setAdminPin = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SET_PIN,
    payload: value,
  });
}

const setForemanInfo = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SET_FOREMAN_INFO,
    payload: value,
  });
}

const setMaxClockOutTime = (value) => (dispatch) => {
  dispatch({
    type: TYPE.SET_MAX_CLOCK_OUT_TIME,
    payload: value,
  });
}

const setGroups = () => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    let response = await api.getGroups().catch(err =>  console.log(err))
    if(response){
      dispatch({
        type: TYPE.SET_GROUPS,
        payload: response?.data?.results?.groups,
      });
      resolve(true);
    }
  })
  
}

const setUsers = () => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    let response = await api.getUsers().catch(err =>  console.log(err))
    if(response){
      let result: any = [], users = response?.data?.results?.users;
      if(users){
        result = Object.keys(users).map(id => {
          const group = getState()?.admin?.groups[users[id]?.group_id]?.name;
          return {
            value : id,
            label : `${users[id].first_name} ${users[id].last_name}`,
            company_name : users[id].company_name,
            profile_image_url : users[id].profile_image_url,
            group
          }
        })
      }
      
      dispatch({
        type: TYPE.SET_USERS,
        payload: result,
      });
      resolve(true);
    }
  })
  
}

const logout = () => (dispatch) => {
  dispatch({
    type: TYPE.LOGOUT,
  });
}


export default {
  setSigninPin,
  setUserAuthenticated,
  selectClient,
  selectJobcode,
  selectBgImage,
  selectLogo,
  setAdminPin,
  setForemanInfo,
  setToken,
  logout,
  setGroups,
  setUsers,
  setMaxClockOutTime
};
