import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';
import { AuthState, Reducers } from '../../../Models';

const SET_USER = 'SET_USER';
const USER_COMMAND = 'USER_COMMAND';
const USER_RESPONSE = 'USER_RESPONSE';

export const constant = {
  SET_USER,
  USER_COMMAND,
  USER_RESPONSE
};

export const initialState: AuthState = {
  user: {
    id: 0,
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

const setUserHandler = (
    state: AuthState,
    { payload }: { payload: AuthState }
) => ({
  ...state,
  user: {
    ...payload
  }
});

const reducerMap: Reducers = {
  [SET_USER]: setUserHandler
};

export default typeToReducer(reducerMap, initialState);

