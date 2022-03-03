import React from 'react';
import Status from '../pages/Status';
import Home from '../pages/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AddStackSreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Status" component={Status} />
    </Stack.Navigator>
  );
}

export default AddStackSreen;
