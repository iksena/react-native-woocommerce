import { createSelector } from 'reselect';

const getLoadingState = state => (state && state.loading) || {};

const getVisibility = createSelector(
  [getLoadingState],
  data => data.visibility || false
);

const getTransparent = createSelector(
  [getLoadingState],
  data => data.transparent || false
);

export default {
  getVisibility,
  getTransparent
};
