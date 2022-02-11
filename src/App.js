import React from 'react';
import styles from './styles';
import Login from './pages/Login/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Main from './pages/Main';

const Stack = createStackNavigator();
console.warn(Login);
function App() {
  return (
    <NavigationContainer style={styles.navBar}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} options />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
