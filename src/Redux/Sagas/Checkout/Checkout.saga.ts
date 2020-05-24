import { Linking } from 'react-native';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { actions, constant } from '../../Reducers/Checkout/Chekout.reducer';
import { actions as appActions } from '../../Reducers/App/App.reducer';
import WooCommerce from '../../../Services/WooCommerce';
import config from '../../../Config';
import { handleError } from '../../../Utils';

export function* sendOrderAPI(order: object) {
  const { data } = yield call(WooCommerce.post, '/orders', order);

  return data;
}

export function* sendOrder({ payload: order }: { payload: object }) {
  try {
    const { id, order_key } = yield call(sendOrderAPI, order);

    if (!!id && !!order_key) {
      const paymentUrl =
          `${config.WC_BASE_URL}/checkout/order-pay/${id}?pay_for_order=true&key=${order_key}`;

      yield put(actions.checkoutResponse());
      yield Linking.openURL(paymentUrl);
    }
  } catch (error) {
    yield call(handleError, error);
  } finally {
    yield put(appActions.setRenderable());
  }
}

export function* watchCheckoutCommand() {
  // @ts-ignore
  yield takeLatest(constant.CHECKOUT_COMMAND, sendOrder);
}

export default function* watchAll() {
  yield all([
    fork(watchCheckoutCommand)
  ]);
}
