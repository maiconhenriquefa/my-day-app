import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

function ItemEmoticon({color, emoticon, text, active}) {
  let activeStyle;
  if (active) {
    activeStyle = styles.active;
  } else {
    activeStyle = '';
  }
  return (
    <View style={styles.emoticons__item}>
      <Image style={[styles.emoticons__img, activeStyle]} source={emoticon} />
      {console.warn(active)}
      <Text style={{color: color}}>{text}</Text>
    </View>
  );
}

export default ItemEmoticon;
