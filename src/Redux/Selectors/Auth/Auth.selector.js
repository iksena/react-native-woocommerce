import { createSelector } from 'reselect';

const getUserState = (state) => (state && state.auth.user) || {};

const getName = createSelector(
    [getUserState],
    (data) => data.name || ''
);

const getId = createSelector(
    [getUserState],
    (data) => data.id || ''
);

const getAddress = createSelector(
    [getUserState],
    (data) => data.address || ''
);

export default {
  getName,
  getId,
  getAddress
};
