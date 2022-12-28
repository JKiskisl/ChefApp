import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import AllScanned from '../screens/AllScanned';
import DeleteorUpdate from '../screens/DeleteorUpdate';
import orderAccepted from '../screens/orderAccepted';
import declinedOrders from '../screens/declinedOrders';
import PendingOrders from '../screens/PendingOrders';
import completedOrders from '../screens/completedOrders';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='AllScanned' component={AllScanned}/>
      <Stack.Screen name='DeleteorUpdate' component={DeleteorUpdate}/>
      <Stack.Screen name='OrderAccepted' component={orderAccepted}/>
      <Stack.Screen name='DeclinedOrders' component={declinedOrders}/>
      <Stack.Screen name='PendingOrders' component={PendingOrders}/>
      <Stack.Screen name='CompletedOrders' component={completedOrders}/>
    </Stack.Navigator>
  );
};
