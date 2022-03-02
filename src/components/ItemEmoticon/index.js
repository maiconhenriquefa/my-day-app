import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

function ItemEmoticon({color, emoticon, text, style}) {
  return (
    <View style={styles.emoticons__item}>
      <Image style={[styles.emoticons__img, style]} source={emoticon} />
      <Text style={{color: color}}>{text}</Text>
    </View>
  );
}

export default ItemEmoticon;
