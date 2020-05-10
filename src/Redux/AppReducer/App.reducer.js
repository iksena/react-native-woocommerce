import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

const SET_RENDERABLE = 'SET_RENDERABLE';
const RESET_RENDERABLE = 'RESET_RENDERABLE';

export const constant = {
  SET_RENDERABLE,
  RESET_RENDERABLE
};

export const initialState = {
  isRenderable: false
};

const setRenderable = createAction(SET_RENDERABLE);
const resetRenderable = createAction(RESET_RENDERABLE);

export const actions = {
  setRenderable,
  resetRenderable
};

const setRenderableHandler = state => ({
  ...state,
  isRenderable: true
});

const resetRenderableHandler = () => initialState;

export default typeToReducer({
  [SET_RENDERABLE]: setRenderableHandler,
  [RESET_RENDERABLE]: resetRenderableHandler
}, initialState);

