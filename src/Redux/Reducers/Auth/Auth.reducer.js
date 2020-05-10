import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

const SET_USER = 'SET_USER';
const USER_COMMAND = 'USER_COMMAND';
const USER_RESPONSE = 'USER_RESPONSE';

export const constant = {
  SET_USER,
  USER_COMMAND,
  USER_RESPONSE
};

export const initialState = {
  user: {
    id: '',
    name: '',
    address: ''
  }
};

const setUser = createAction(SET_USER);
const userCommand = createAction(USER_COMMAND);
const userResponse = createAction(USER_RESPONSE);

export const actions = {
  setUser,
  userCommand,
  userResponse
};

const setUserHandler = (state, { payload }) => ({
  ...state,
  user: {
    ...payload
  }
});

export default typeToReducer({
  [SET_USER]: setUserHandler
}, initialState);

