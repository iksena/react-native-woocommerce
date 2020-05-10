import reducer, { initialState, actions, constant } from './Loading.reducer';

describe('Loading Reducer', () => {
  describe('#reducer', () => {
    it('should define the reducer function', () => {
      expect(reducer).toBeDefined();
    });

    it('should initialize the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('#setLoadingHandler', () => {
      it('should define transparentLoading action', () => {
        expect(actions.loading).toBeDefined();
      });

      it('should define noLoading action', () => {
        expect(actions.noLoading).toBeDefined();
      });

      it('should return action with type TRANSPARENT_LOADING', () => {
        expect(actions.loading().type).toEqual(constant.LOADING);
      });

      it('should return action with type NO_LOADING', () => {
        expect(actions.noLoading().type).toEqual(constant.NO_LOADING);
      });

      it('should set loading state', () => {
        const loading = {
          visibility: true
        };
        const action = {
          type: `${constant.LOADING}`,
          payload: loading
        };

        const nextState = reducer(initialState, action);

        expect(nextState).toEqual(loading);
      });

      it('should set no loading state', () => {
        const noLoading = {
          visibility: false
        };
        const action = {
          type: `${constant.NO_LOADING}`,
          payload: noLoading
        };

        const nextState = reducer(initialState, action);

        expect(nextState).toEqual(noLoading);
      });
    });
  });
});
