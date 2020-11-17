import TYPE from '../types/user-type';

const initialState = {
  userId : null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_USERID:
        return { ...state, userId : action.payload };
    default:
      return state;
  }
};