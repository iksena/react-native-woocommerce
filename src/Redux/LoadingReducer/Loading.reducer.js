import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

const LOADING = 'LOADING';
const NO_LOADING = 'NO_LOADING';

export const constant = {
  LOADING,
  NO_LOADING
};

export const initialState = {
  visibility: false
};

const loading = createAction(LOADING);
const noLoading = createAction(NO_LOADING);

export const actions = {
  loading,
  noLoading
};

const setLoadingHandler = ({ visibility, transparent }) => () => ({
  visibility,
  transparent
});

export default typeToReducer({
  [LOADING]: setLoadingHandler({ visibility: true }),
  [NO_LOADING]: setLoadingHandler({ visibility: false })
}, initialState);

