import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './Reducers';
import rootSaga from './Sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cart']
};

// support debugging using react-native-debugger app
// that supports redux devtools and component tree inspector
// ref https://github.com/jhen0409/react-native-debugger
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleware();

const persistReducers = persistReducer(persistConfig, reducers);
const store = createStore(persistReducers, composeEnhancers(applyMiddleware(logger, sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {
  store,
  persistor
};
