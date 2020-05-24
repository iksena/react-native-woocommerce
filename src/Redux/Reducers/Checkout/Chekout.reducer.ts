import { createAction } from 'redux-actions';

const CHECKOUT_COMMAND = 'CHECKOUT_COMMAND';
const CHECKOUT_RESPONSE = 'CHECKOUT_RESPONSE';

export const constant = {
  CHECKOUT_COMMAND,
  CHECKOUT_RESPONSE,
};

const checkoutCommand = createAction(CHECKOUT_COMMAND);
const checkoutResponse = createAction(CHECKOUT_RESPONSE);

export const actions = {
  checkoutCommand,
  checkoutResponse,
};

