import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import BrowseContainer from '../Containers/Browse/Browse.container';
import ProductContainer from '../Containers/Product/Product.container';
import RootContainer from '../Containers/Root/Root.container';
import Routes from './Routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Browse = () => (
  <Stack.Navigator initialRouteName={Routes.Shop}>
    <Stack.Screen name={Routes.Shop} component={BrowseContainer}/>
    <Stack.Screen name={Routes.Product} component={ProductContainer}/>
  </Stack.Navigator>
)

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.Browse} component={Browse}/>
    <Tab.Screen name={Routes.Profile} component={RootContainer}/>
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator initialRouteName={Routes.Home}>
    <Stack.Screen name={Routes.Root} component={RootContainer}/>
    <Stack.Screen name={Routes.Home} component={Home} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default RootStack;
