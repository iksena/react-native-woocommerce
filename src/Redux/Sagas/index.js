import {all} from 'redux-saga/effects';

import LoadingSaga from './Loading/Loading.saga';
import ProductsSaga from './Products/Products.saga';

export default function* rootSaga() {
  yield all([
    LoadingSaga(),
    ProductsSaga(),
  ]);
}
