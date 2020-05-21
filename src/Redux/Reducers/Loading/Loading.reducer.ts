import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';
import { Reducers, LoadingState } from '../../../Models';

const LOADING = 'LOADING';
const NO_LOADING = 'NO_LOADING';

export const constant = {
  LOADING,
  NO_LOADING
};

export const initialState: LoadingState = {
  visibility: false
};

const loading = createAction(LOADING);
const noLoading = createAction(NO_LOADING);

export const actions = {
  loading,
  noLoading
};

const setLoadingHandler = (payload: LoadingState) => (): LoadingState => payload;

const reducerMap: Reducers = {
  [LOADING]: setLoadingHandler({ visibility: true }),
  [NO_LOADING]: setLoadingHandler({ visibility: false })
};

export default typeToReducer(reducerMap, initialState);

