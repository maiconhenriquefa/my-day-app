import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Data from '../../mocks/statusItem';

function Status({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.item__backLeft}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" style={styles.item__backLeft.icon} />
      </TouchableOpacity>
      <View style={styles.hours}>
        <SimpleLineIcons name="clock" color="#969696" size={14} />
        <Text style={styles.hours.text}>08:35</Text>
      </View>
      <View style={styles.date}>
        <SimpleLineIcons name="calendar" color="#969696" size={14} />
        <Text style={styles.date.text}>hoje 23 de janeiro</Text>
      </View>
      <View style={styles.status}>
        <Image style={styles.status.emotion} source={Data.image} />
        <Text style={[styles.status.text, {color: Data.color}]}>
          {Data.title}
        </Text>
      </View>
      <View style={styles.options}>
        <View style={styles.options__item}>
          <CommunityIcons name="party-popper" style={styles.item__icon} />
          <Text style={styles.item__text}>festa</Text>
        </View>
        <View style={styles.options__item}>
          <Icon name="sports-basketball" style={styles.item__icon} />
          <Text style={styles.item__text}>esporte</Text>
        </View>
        <View style={styles.options__item}>
          <CommunityIcons name="car-side" style={styles.item__icon} />
          <Text style={styles.item__text}>passeio</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.description.text}>{Data.text}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Status;
