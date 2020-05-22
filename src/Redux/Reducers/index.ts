import { combineReducers } from 'redux';

import appReducer from './App/App.reducer';
import authReducer from './Auth/Auth.reducer';
import loadingReducer from './Loading/Loading.reducer';
import productsReducer from './Products/Products.reducer';
import cartReducer from './Cart/Cart.reducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: loadingReducer,
  products: productsReducer,
  cart: cartReducer
});
