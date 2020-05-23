import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { persistor, store } from './Redux';
import NavigationStacks from './Navigation/Stacks';
import Loading from './Components/Loading/Loading.component';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <Loading />
          <NavigationContainer>
            <NavigationStacks/>
          </NavigationContainer>
          <FlashMessage position="top" />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
