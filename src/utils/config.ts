
export default {
    BASE_URL : window.location.origin,
    API_URL : process.env.REACT_APP_API_BASE_URL || '',
    DEFAULT_PIN: process.env.REACT_APP_SIGNIN_KEY,
    GET_OAUTH : '/login',
    GET_TOKEN_FROM_CODE : '/oauth/callback',
    GET_CLIENTS: '/managed_clients',
    GET_JOBCODES: '/jobcodes',
    GET_GROUPS: '/groups',
    AUTHENTICATE_FACE : '/face-detect',
    GET_USERS : '/users',
    GET_TIMESHEET : '/timesheets'
}