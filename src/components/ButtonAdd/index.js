import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ButtonAdd() {
  return (
    <View style={styles.iconTabRound}>
      <Icon name="add" size={28} color="#FFF" />
    </View>
  );
}

export default ButtonAdd;
