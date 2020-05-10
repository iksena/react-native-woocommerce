import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import RootContainer from '../Containers/Root/Root.container';
import Routes from './Routes';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Root} component={RootContainer}/>
  </Stack.Navigator>
);

export default RootStack;
