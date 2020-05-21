import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { persistor, store } from './Redux';
import NavigationStacks from './Navigation/Stacks';
import Loading from './Components/Loading/Loading.component';
import FlashMessage from 'react-native-flash-message';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Loading />
        <NavigationContainer>
          <NavigationStacks/>
        </NavigationContainer>
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}
