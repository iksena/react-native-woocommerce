import selectors from './App.selector';

describe('App Selector', () => {
  let state;

  beforeEach(() => {
    state = {
      app: {
        isRenderable: true
      }
    };
  });

  describe('#getRenderableState', () => {
    it('should return the renderable state', () => {
      const expectedState = state.app.isRenderable;

      const actualState = selectors.getRenderableState(state);

      expect(actualState).toEqual(expectedState);
    });

    it('should return the default renderable state when state is undefined', () => {
      const expectedDefaultState = false;

      const actualState = selectors.getRenderableState();

      expect(actualState).toEqual(expectedDefaultState);
    });
  });
});
