import { createSelector } from 'reselect';

const getCartState = (state: any) => (state && state.cart) || {};

const getProducts = createSelector(
    [getCartState],
    (data) => data.products || [],
);

const getTotal = createSelector(
    [getCartState],
    (data) => data.total || 0
);

export default {
  getProducts,
  getTotal
};
