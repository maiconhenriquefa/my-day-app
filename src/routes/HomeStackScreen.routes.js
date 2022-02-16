import React from 'react';
import AddStackScreen from './AddStackScreen.routes';
import Settings from '../pages/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonAdd from '../components/ButtonAdd';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

function HomeStaackSreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#304FFE',
        tabBarinactiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 90,
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
        name="AddStackScreen"
        component={AddStackScreen}
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

export default HomeStaackSreen;