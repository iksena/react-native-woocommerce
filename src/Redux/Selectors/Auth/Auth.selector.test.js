import selectors from './Auth.selector';

describe('Root Selector', () => {
  let state;
  let emptyState;

  beforeEach(() => {
    state = {
      auth: {
        user: {
          id: '1',
          name: 'Sena',
          address: 'Jl. Jalan'
        }
      }
    };

    emptyState = {
      auth: {
        user: {
          id: '',
          name: '',
          address: ''
        }
      }
    };
  });

  describe('#getName', () => {
    it('should return name', () => {
      const expectedResult = state.auth.user.name;

      const result = selectors.getName(state);

      expect(result).toEqual(expectedResult);
    });

    it('should return empty string if state is undefined', () => {
      const expectedResult = '';

      const result = selectors.getName(emptyState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getId', () => {
    it('should return id', () => {
      const expectedResult = state.auth.user.id;

      const result = selectors.getId(state);

      expect(result).toEqual(expectedResult);
    });

    it('should return empty string if state is undefined', () => {
      const expectedResult = '';

      const result = selectors.getId(emptyState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getAddress', () => {
    it('should return address', () => {
      const expectedResult = state.auth.user.address;

      const result = selectors.getAddress(state);

      expect(result).toEqual(expectedResult);
    });

    it('should return empty string if state is undefined', () => {
      const expectedResult = '';

      const result = selectors.getAddress(emptyState);

      expect(result).toEqual(expectedResult);
    });
  });
});
