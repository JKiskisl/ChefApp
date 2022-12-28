import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';

export const HomeScreen = ({navigation}) => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
      <Button title="View all orders" onPress={()=> navigation.navigate('AllScanned')}/>
      <Button title="Pending orders" onPress={() => navigation.navigate('PendingOrders')}/>
      <Button title="Accepted orders" onPress={() => navigation.navigate('OrderAccepted')}/>
      <Button title="Declined orders" onPress={() => navigation.navigate('DeclinedOrders')}/>
      <Button title="Completed orders" onPress={() => navigation.navigate('CompletedOrders')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
