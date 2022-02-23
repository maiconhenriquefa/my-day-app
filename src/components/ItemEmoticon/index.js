import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

function ItemEmoticon() {
  return (
    <View style={styles.emoticons__item}>
      <Image
        style={styles.emoticons__img}
        source={require('../../assets/happy.png')}
      />
      <Text>Bem</Text>
    </View>
  );
}

export default ItemEmoticon;
