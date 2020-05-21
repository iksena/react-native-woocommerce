import { createSelector } from 'reselect';

const getLoadingState = (state) => (state && state.loading) || {};

const getVisibility = createSelector(
    [getLoadingState],
    (data) => data.visibility || false
);

export default {
  getVisibility
};
