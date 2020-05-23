import React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Routes from './Routes';
import BrowseContainer from '../Containers/Browse/Browse.container';
import ProductContainer from '../Containers/Product/Product.container';
import RootContainer from '../Containers/Root/Root.container';
import CartContainer from '../Containers/Cart/Cart.container';
import CheckoutContainer from '../Containers/Checkout/Checkout.container';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Browse = (): JSX.Element => (
  <Stack.Navigator initialRouteName={Routes.Shop}>
    <Stack.Screen name={Routes.Shop} component={BrowseContainer}/>
    <Stack.Screen name={Routes.Product} component={ProductContainer}/>
  </Stack.Navigator>
);

const Orders = (): JSX.Element => (
  <Stack.Navigator initialRouteName={Routes.Cart}>
    <Stack.Screen name={Routes.Cart} component={CartContainer}/>
    <Stack.Screen name={Routes.Checkout} component={CheckoutContainer}/>
  </Stack.Navigator>
);

const tabIcons = {
  [Routes.Browse]: 'shopping-bag',
  [Routes.Orders]: 'shopping-cart'
};

const Home = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={({ route }): object => ({
      tabBarIcon: ({ color, size }: { color: string; size: number}): JSX.Element =>
        <Icon
          name={tabIcons[route.name]}
          type="font-awesome-5"
          size={size}
          color={color}
        />
    })}>
    <Tab.Screen name={Routes.Browse} component={Browse}/>
    <Tab.Screen name={Routes.Orders} component={Orders}/>
  </Tab.Navigator>
);

const RootStack = (): JSX.Element => (
  <Stack.Navigator initialRouteName={Routes.Home}>
    <Stack.Screen name={Routes.Root} component={RootContainer}/>
    <Stack.Screen
      name={Routes.Home}
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RootStack;
