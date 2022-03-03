import React from 'react';
import AddStackScreen from './AddStackScreen.routes';
import Settings from '../pages/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonAdd from '../components/ButtonAdd';
import Home from '../pages/Home';
import ButtonSettings from '../components/ButtonSettings';
import ButtonHome from '../components/ButtonHome';

const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="AddStackScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#304FFE',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 90,
        },
      }}>
      <Tab.Screen
        name="AddStackScreen"
        component={AddStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonHome focused={focused} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <ButtonAdd color={color} />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate({name: 'Add', params: {isVisible: true}});
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonSettings focused={focused} name="list" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabScreen;
