import React from 'react';
import {View, Text, Image} from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json"grinning"
function ItemStatus({statusText, color}) {
  return (
    <View style={styles.item}>
      <View style={styles.item__header}>
        <Image
          style={styles.item__emoticon}
          source={require(`./../../assets/happy.png`)}
        />
        <View style={styles.item__status}>
          <Text>HOJE, 23 DE JANEIRO</Text>
          <View style={styles.item__details}>
            <Text
              style={{
                color: color,
                marginRight: 10,
                fontFamily: 'Source Sans Pro',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              {statusText}
            </Text>
            <Text style={styles.item__date}>08:35</Text>
          </View>
        </View>
      </View>
      <View style={styles.item__options}>
        <CommunityIcons
          style={styles.options__activities}
          name="party-popper"
        />
        <Text style={styles.item__options.text}>festa</Text>
        <Entypo name="dot-single" color="black" size={20} />
        <Icon style={styles.options__activities} name="sports-basketball" />
        <Text style={styles.item__options.text}>esporte</Text>
        <Entypo name="dot-single" color="black" size={20} />
        <CommunityIcons style={styles.options__activities} name="car-side" />
        <Text style={styles.item__options.text}>passeio</Text>
      </View>
      <View>
        <Text style={styles.item_description}>
          Hoje foi um dia muito bom. Joguei...
        </Text>
      </View>
    </View>
  );
}

export default ItemStatus;
