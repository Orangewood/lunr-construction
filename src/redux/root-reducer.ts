import { combineReducers } from 'redux';
import {  persistReducer } from 'redux-persist';
import adminreducer from './reducers/admin-reducer';
import userreducer from './reducers/user-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['admin'] 
 };


const rootReducer = combineReducers({
    admin: adminreducer,
    user : userreducer
});


export default persistReducer ( persistConfig, rootReducer );