import React from 'react';
import {View, ViewBase} from 'react-native';
import styles from './styles';
import Login from './pages/Login/index';

function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

export default App;
