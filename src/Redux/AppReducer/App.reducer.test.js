import reducer, { initialState, actions, constant } from './App.reducer';

describe('App Reducer', () => {
  describe('#reducer', () => {
    it('should initialize the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('#setRenderableHandler', () => {
      it('should return action with type SET_RENDERABLE', () => {
        expect(actions.setRenderable().type).toEqual(constant.SET_RENDERABLE);
      });

      it('should set isRenderable', () => {
        const expectedNextState = { isRenderable: true };
        const action = { type: constant.SET_RENDERABLE };

        const nextState = reducer(initialState, action);

        expect(nextState).toEqual(expectedNextState);
      });
    });

    describe('#resetRenderableHandler', () => {
      it('should return action with type RESET_RENDERABLE', () => {
        expect(actions.resetRenderable().type).toEqual(constant.RESET_RENDERABLE);
      });

      it('should reset state', () => {
        const currentState = { isRenderable: true };
        const action = { type: constant.RESET_RENDERABLE };

        const nextState = reducer(currentState, action);

        expect(nextState).toEqual(initialState);
      });
    });
  });
});
