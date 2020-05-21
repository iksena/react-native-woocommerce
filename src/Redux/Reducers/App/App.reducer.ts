import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';
import { AppState } from '../../../Models';

const SET_RENDERABLE = 'SET_RENDERABLE';
const RESET_RENDERABLE = 'RESET_RENDERABLE';

export const constant = {
  SET_RENDERABLE,
  RESET_RENDERABLE
};

export const initialState: AppState = {
  isRenderable: false
};

const setRenderable = createAction(SET_RENDERABLE);
const resetRenderable = createAction(RESET_RENDERABLE);

export const actions = {
  setRenderable,
  resetRenderable
};

const setRenderableHandler = (state: AppState): AppState => ({
  ...state,
  isRenderable: true
});

const resetRenderableHandler = (): AppState => initialState;

export default typeToReducer({
  [SET_RENDERABLE]: setRenderableHandler,
  [RESET_RENDERABLE]: resetRenderableHandler
}, initialState);

