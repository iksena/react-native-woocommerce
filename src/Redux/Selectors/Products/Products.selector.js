import {createSelector} from 'reselect';

const getProductsState = state => (state && state.products) || {};

const getProducts = createSelector(
  [getProductsState],
  data => data.products || [],
);

export default {
  getProducts,
};
