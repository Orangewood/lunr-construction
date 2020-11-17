
import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import adminReducer from './admin-reducer';
import userReducer from './user-reducer';

const persistConfig ={
    key: 'root',
    storage,
    whitelist:['admin']
}

const rootReducer = combineReducers({
  admin : adminReducer,
  user : userReducer
});

export default persistReducer(persistConfig,rootReducer);