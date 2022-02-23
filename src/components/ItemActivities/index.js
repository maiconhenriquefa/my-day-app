import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ItemActivities() {
  return (
    <View style={styles.activities__item}>
      <View style={styles.box__icon}>
        <CommunityIcons name="car" style={styles.activities__icon} />
      </View>
      <Text>festa</Text>
    </View>
  );
}

export default ItemActivities;