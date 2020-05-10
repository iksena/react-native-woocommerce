import { combineReducers } from 'redux';

import appReducer from './AppReducer/App.reducer';
import authReducer from './AuthReducer/Auth.reducer';
import loadingReducer from './LoadingReducer/Loading.reducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: loadingReducer
});
