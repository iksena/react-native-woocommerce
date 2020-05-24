import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

import { Reducers, ProductsState, Product } from '../../../Models';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_PRODUCTS_REFRESHING = 'SET_PRODUCTS_REFRESHING';
const SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE';
const REFETCH_PRODUCTS = 'REFETCH_PRODUCTS';
const PRODUCTS_QUERY = 'PRODUCTS_QUERY';
const PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE';
const PRODUCTS_END_REACHED = 'PRODUCTS_END_REACHED';
const RESET_PRODUCTS_STATE = 'RESET_PRODUCTS_STATE';

export const constant = {
  SET_PRODUCTS,
  SET_PRODUCTS_REFRESHING,
  SET_PRODUCTS_PAGE,
  REFETCH_PRODUCTS,
  PRODUCTS_QUERY,
  PRODUCTS_RESPONSE,
  PRODUCTS_END_REACHED,
  RESET_PRODUCTS_STATE
};

export const initialState: ProductsState = {
  products: [],
  refreshing: false,
  page: 1
};

const setProducts = createAction(SET_PRODUCTS);
const setProductsRefreshing = createAction(SET_PRODUCTS_REFRESHING);
const setProductsPage = createAction(SET_PRODUCTS_PAGE);
const productsQuery = createAction(PRODUCTS_QUERY);
const refetchProducts = createAction(REFETCH_PRODUCTS);
const productsResponse = createAction(PRODUCTS_RESPONSE);
const productsEndReached = createAction(PRODUCTS_END_REACHED);
const resetProductsState = createAction(RESET_PRODUCTS_STATE);

export const actions = {
  setProducts,
  setProductsRefreshing,
  setProductsPage,
  productsQuery,
  refetchProducts,
  productsResponse,
  productsEndReached,
  resetProductsState
};

const resetProductsStateHandler = (
    state: ProductsState,
    { payload }: { payload: ProductsState }
): ProductsState => ({
  ...state,
  products: [],
  refreshing: payload.refreshing,
  page: 1
});

const setProductsHandler = (
    state: ProductsState,
    { payload: products }: { payload: Array<Product> }
): ProductsState => ({
  ...state,
  products: [...state.products, ...products]
});

const setPageHandler = (state: ProductsState): ProductsState => ({
  ...state,
  page: state.page + 1
});

const setRefreshingHandler = (
    state: ProductsState,
    { payload: refreshing }: { payload: boolean }
): ProductsState => ({
  ...state,
  refreshing
});

const reducerMap: Reducers = {
  [SET_PRODUCTS]: setProductsHandler,
  [SET_PRODUCTS_PAGE]: setPageHandler,
  [SET_PRODUCTS_REFRESHING]: setRefreshingHandler,
  [RESET_PRODUCTS_STATE]: resetProductsStateHandler
};

export default typeToReducer(reducerMap, initialState);

