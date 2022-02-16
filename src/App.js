import React from 'react';

import {StatusBar} from 'react-native';

import Login from './pages/Login';
import HomeStackScreen from './routes/HomeStackScreen.routes';

import {NavigationContainer} from '@react-navigation/native';
import styles from './styles';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.navBar}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
