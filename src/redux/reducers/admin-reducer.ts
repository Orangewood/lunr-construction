import TYPE from '../types/admin-type';

const initialState = {
  token : null,
  setpin: null,
  authenticated:null,
  client:null,
  jobcode : null,
  thermometer:null,
  pin:null,
  background:null,
  logo:null,
  foremanInfo:{},
  groups : null,
  users : [],
  maxClockOutTime : null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TYPE.SET_PIN:
      return { ...state, setpin:action.payload };

    case TYPE.SET_TOKEN:
      return { ...state, token:action.payload };

    case TYPE.SIGN_IN:
      return { ...state, authenticated:action.payload };

    case TYPE.SELECT_CLIENT:
      return { ...state, client:action.payload };
    
    case TYPE.SELECT_JOBCODE:
      return { ...state, jobcode:action.payload };

    case TYPE.SELECT_THERMOMETER:
      return { ...state, thermometer:action.payload };

    case TYPE.CHANGE_PIN:
      return { ...state, pin:action.payload };
    
    case TYPE.SET_BACKGROUND:
        return { ...state, background:action.payload };

    case TYPE.SET_LOGO:
        return { ...state, logo:action.payload };

    case TYPE.SET_FOREMAN_INFO:
        return { ...state, foremanInfo:{...action.payload} };

    case TYPE.SET_MAX_CLOCK_OUT_TIME:
        return { ...state, maxClockOutTime: action.payload };

    case TYPE.SET_GROUPS:
        return { ...state, groups:{...action.payload} };

    case TYPE.SET_USERS:
        return { ...state, users:[...action.payload] };

    case TYPE.LOGOUT:
      return {
        ...initialState
      }

    default:
      return state;
  }
};