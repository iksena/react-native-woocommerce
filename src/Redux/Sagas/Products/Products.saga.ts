import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import WooCommerce from '../../../Services/WooCommerce';
import { handleError, isNonEmptyArray } from '../../../Utils';
import { actions, constant } from '../../Reducers/Products/Products.reducer';
import { actions as appActions } from '../../Reducers/App/App.reducer';
import { ProductsState } from '../../../Models';

export function* callProductsAPI(page: number) {
  const { data } = yield call(WooCommerce.get, `/products?page=${page}`);

  return data;
}

export function* getProducts({ payload }: { payload: ProductsState }) {
  const { page = 1 } = payload;

  try {
    const products = yield call(callProductsAPI, page);

    if (isNonEmptyArray(products)) {
      yield put(actions.productsResponse());
      yield put(actions.setProducts(products));
      yield put(actions.setProductsPage());
    }
  } catch (error) {
    yield call(handleError, error);
  } finally {
    yield put(appActions.setRenderable());
  }
}

export function* initialGetProducts({ payload }: { payload: ProductsState }) {
  const defaultPayload = { payload: { ...payload, page: 1 } };

  yield put(actions.resetProductsState({ refreshing: false }));
  yield call(getProducts, defaultPayload);
}

export function* refetchProducts({ payload }: { payload: ProductsState }) {
  const defaultPayload = { payload: { ...payload, page: 1 } };

  yield put(actions.resetProductsState({ refreshing: true }));
  yield call(getProducts, defaultPayload);
  yield put(actions.setProductsRefreshing(false));
}

export function* watchProductsQuery() {
  // @ts-ignore
  yield takeLatest(constant.PRODUCTS_QUERY, initialGetProducts);
}

export function* watchProductsEndReached() {
  // @ts-ignore
  yield takeLatest(constant.PRODUCTS_END_REACHED, getProducts);
}

export function* watchRefetchProducts() {
  // @ts-ignore
  yield takeLatest(constant.REFETCH_PRODUCTS, refetchProducts);
}

export default function* watchAll() {
  yield all([
    fork(watchProductsQuery),
    fork(watchRefetchProducts),
    fork(watchProductsEndReached)
  ]);
}
