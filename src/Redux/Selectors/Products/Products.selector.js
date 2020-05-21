import { createSelector } from 'reselect';

const getProductsState = (state) => (state && state.products) || {};

const getProducts = createSelector(
    [getProductsState],
    (data) => data.products || [],
);

const isRefreshing = createSelector(
    [getProductsState],
    (data) => data.refreshing,
);

const getPage = createSelector(
    [getProductsState],
    (data) => data.page || 1,
);

export default {
  getProducts,
  isRefreshing,
  getPage,
};
