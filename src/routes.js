import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './pages/Home/index';
import Add from './pages/Add/index';
import Settings from './pages/Settings/index';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ButtonAdd from './components/ButtonAdd';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      style={styles.navBar}
      inactiveColor="rgba(255,255,255, 0.5)"
      activeColor="#304FFE"
      tabBarOptions={{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#777',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => <ButtonAdd color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
