import {createSelector} from 'reselect';

const getProductsState = state => (state && state.products) || {};

const getProducts = createSelector(
  [getProductsState],
  data => data.products || [],
);

const isRefreshing = createSelector(
  [getProductsState],
  data => data.refreshing,
);

export default {
  getProducts,
  isRefreshing,
};
