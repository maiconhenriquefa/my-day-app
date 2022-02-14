import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Add from './pages/Add';
import Settings from './pages/Settings';

import ButtonAdd from './components/ButtonAdd';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screeOptions={{
        style: {
          backgroundColor: '#000000',
        },
        activeTintColor: '#304FFE',
        tabStyle: {
          paddingBottom: 100,
          paddingTop: 100,
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({color}) => <ButtonAdd color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
