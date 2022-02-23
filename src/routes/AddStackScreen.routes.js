import React from 'react';
import Status from '../pages/Status';
import HomeEmpty from '../pages/HomeEmpty';
import Add from '../pages/Add';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AddStackSreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
}

export default AddStackSreen;
