import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

// import { Container } from './styles';

const ButtonHome = ({color, focused}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#304FFE' : '#fff'},
      ]}>
      <Icon name="home" style={styles.icon} color={color} />
    </View>
  );
};

export default ButtonHome;
