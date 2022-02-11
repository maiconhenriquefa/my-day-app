import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home/index';

const Tab = createBottomTabNavigator();
function BarNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BarNavigation;
