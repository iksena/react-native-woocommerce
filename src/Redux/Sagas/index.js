import { all } from 'redux-saga/effects';

import LoadingSaga from './Loading/Loading.saga';

export default function* rootSaga() {
  yield all([
    LoadingSaga()
  ]);
}
