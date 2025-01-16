import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '/workspaces/training/my-app/app/screens/home.tsx';
import Basket from '../screens/Basket';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import RestaurantDetailsScreen from '../screens/ResaurantDetailsScreen';
import OrderScreen from '../screens/OrdersScreen';



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}options={{title:"HomeScreen"}}/>
      <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{title:"RestaurantDetailsScreen"}}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
