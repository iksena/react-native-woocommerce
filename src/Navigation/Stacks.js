import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import RootContainer from '../Containers/Root/Root.container';
import Routes from './Routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.Browse} component={RootContainer}/>
    <Tab.Screen name={Routes.Profile} component={RootContainer}/>
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator initialRouteName={Routes.Root}>
    <Stack.Screen name={Routes.Root} component={RootContainer}/>
    <Stack.Screen name={Routes.Home} component={Home}/>
  </Stack.Navigator>
);

export default RootStack;
