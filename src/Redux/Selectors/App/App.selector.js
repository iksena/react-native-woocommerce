import { createSelector } from 'reselect';

const getAppState = (state) => (state && state.app) || {};

const getRenderableState = createSelector(
    [getAppState],
    (appState) => appState.isRenderable || false
);

export default {
  getRenderableState
};
