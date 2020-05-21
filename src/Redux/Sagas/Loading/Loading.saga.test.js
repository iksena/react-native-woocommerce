import { takeLatest, put, all } from 'redux-saga/effects';

import watchAll, { watchResponseAction,
  watchCommandAction,
  watchQueryAction,
  handlerResponseAction,
  handlerCommandAction,
  handlerQueryAction,
  matchRegex } from './Loading.saga';
import { actions } from '../../Reducers/Loading/Loading.reducer';
import { actions as appActions } from '../../Reducers/App/App.reducer';

jest.mock('redux-saga/effects', () => ({
  takeLatest: jest.fn(),
  put: jest.fn(),
  all: jest.fn(),
  fork: jest.fn(),
  select: jest.fn()
}));

describe('Loading Saga', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#watchResponseAction', () => {
    it('should call saga takeEvery', () => {
      const watcher = watchResponseAction();

      watcher.next();

      expect(takeLatest).toBeCalled();
    });
  });

  describe('#handlerResponseAction', () => {
    it('should call put', () => {
      const watcher = handlerResponseAction();

      watcher.next();

      expect(put).toBeCalledWith(actions.noLoading());
    });
  });

  describe('#watchCommandAction', () => {
    it('should call saga takeEvery', () => {
      const watcher = watchCommandAction();

      watcher.next();

      expect(takeLatest).toBeCalled();
    });
  });

  describe('#handlerCommandAction', () => {
    it('should call put', () => {
      const watcher = handlerCommandAction();

      watcher.next();

      expect(put).toBeCalledWith(actions.loading());
    });
  });

  describe('#watchQueryAction', () => {
    it('should call saga takeEvery', () => {
      const watcher = watchQueryAction();

      watcher.next();

      expect(takeLatest).toBeCalled();
    });
  });

  describe('#handlerQueryAction', () => {
    it('should call put with loading action', () => {
      const watcher = handlerQueryAction();

      watcher.next();

      expect(put).toBeCalledWith(actions.loading());
    });

    it('should call put with reset renderable action if state renderable', () => {
      const watcher = handlerQueryAction();

      watcher.next();
      watcher.next();
      watcher.next(true);

      expect(put).toBeCalledWith(appActions.resetRenderable());
    });

    it('should not call put if state is not renderable', () => {
      const watcher = handlerQueryAction();

      watcher.next();
      watcher.next();
      watcher.next(false);

      expect(put).not.toBeCalledWith(appActions.resetRenderable());
    });
  });

  describe('#watchAll', () => {
    it('should call all', () => {
      const watcher = watchAll();

      watcher.next();

      expect(all).toBeCalled();
    });
  });

  describe('#matchRegex', () => {
    it('should return true if action type is match', () => {
      const regex = /\w*_COMMAND\b/;
      const action = {
        type: 'USER_COMMAND'
      };

      const actualResult = matchRegex(regex)(action);

      expect(actualResult).toEqual(true);
    });

    it('should return false if action type is not match', () => {
      const regex = /\w*_COMMAND\b/;
      const action = {
        type: 'USER_RESPONSE'
      };

      const actualResult = matchRegex(regex)(action);

      expect(actualResult).toEqual(false);
    });
  });
});
