import TYPE from '../types/user-type';

const setUserId = (data) => (dispatch) => {
  dispatch({
    type: TYPE.SET_USERID,
    payload: data,
  });
}


export default {
    setUserId,
};
