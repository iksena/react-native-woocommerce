import reducer, { initialState, actions, constant } from './Auth.reducer';

describe('Auth Reducer', () => {
  describe('#reducer', () => {
    it('should define the reducer function', () => {
      expect(reducer).toBeDefined();
    });

    it('should initialize the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('#setUser', () => {
      it('should define the setUser action', () => {
        expect(actions.setUser).toBeDefined();
      });

      it('should return action with type SET_USER', () => {
        expect(actions.setUser().type).toEqual(constant.SET_USER);
      });

      it('should set user state', () => {
        const user = {
          id: '1',
          name: 'Sena',
          address: 'Jl. Jalan',
        };
        const action = {
          type: `${constant.SET_USER}`,
          payload: user
        };
        const expectedNextState = { user };

        const nextState = reducer(initialState, action);

        expect(nextState).toEqual(expectedNextState);
      });
    });
  });
});
