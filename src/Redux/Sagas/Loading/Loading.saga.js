import { fork, takeLatest, put, all, select } from 'redux-saga/effects';

import { actions } from '../../Reducers/Loading/Loading.reducer';
import { actions as appActions } from '../../Reducers/App/App.reducer';
import selectors from '../../Selectors';

export const matchRegex = (regex) => (action) => regex.test(action.type);

export function* handlerCommandAction() {
  yield put(actions.loading());
}

export function* handlerQueryAction() {
  yield put(actions.loading());
  const isRenderable = yield select(selectors.app.getRenderableState);

  if (isRenderable) {
    yield put(appActions.resetRenderable());
  }
}

export function* handlerResponseAction() {
  yield put(actions.noLoading());
}

export function* watchCommandAction() {
  yield takeLatest(matchRegex(/\w*_COMMAND\b/), handlerCommandAction);
}

export function* watchQueryAction() {
  yield takeLatest(matchRegex(/\w*_QUERY\b/), handlerQueryAction);
}

export function* watchResponseAction() {
  yield takeLatest(matchRegex(/\w*_RESPONSE\b/), handlerResponseAction);
}

export default function* watchAll() {
  yield all([
    fork(watchCommandAction),
    fork(watchQueryAction),
    fork(watchResponseAction),
  ]);
}
