import selectors from './Loading.selector';

describe('Loading Selector', () => {
  let state;
  let emptyState;

  beforeEach(() => {
    state = {
      loading: {
        visibility: true,
        transparent: true
      }
    };

    emptyState = {
      loading: {
        visibility: false,
        transparent: false
      }
    };
  });

  describe('#getVisibility', () => {
    it('should return visibility state', () => {
      const expectedResult = state.loading.visibility;

      const result = selectors.getVisibility(state);

      expect(result).toEqual(expectedResult);
    });

    it('should return false when state is undefined', () => {
      const expectedResult = false;

      const result = selectors.getVisibility(emptyState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getTransparent', () => {
    it('should return transparent state', () => {
      const expectedResult = state.loading.transparent;

      const result = selectors.getTransparent(state);

      expect(result).toEqual(expectedResult);
    });

    it('should return false when state is undefined', () => {
      const expectedResult = false;

      const result = selectors.getTransparent(emptyState);

      expect(result).toEqual(expectedResult);
    });
  });
});
