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
        <Text style={styles.hours.text}>{Data.hours}</Text>
      </View>
      <View style={styles.date}>
        <SimpleLineIcons name="calendar" color="#969696" size={14} />
        <Text style={styles.date.text}>{Data.date}</Text>
      </View>
      <View style={styles.status}>
        <Image style={styles.status.emotion} source={Data.image} />
        <Text style={[styles.status.text, {color: Data.color}]}>
          {Data.title}
        </Text>
      </View>
      <View style={styles.options}>
        <View style={styles.options__item}>
          <CommunityIcons
            name={Data.activities.activitieOne.icon}
            style={styles.item__icon}
          />
          <Text style={styles.item__text}>
            {Data.activities.activitieOne.name}
          </Text>
        </View>
        <View style={styles.options__item}>
          <Icon
            name={Data.activities.activitieTwo.icon}
            style={styles.item__icon}
          />
          <Text style={styles.item__text}>
            {Data.activities.activitieTwo.name}
          </Text>
        </View>
        <View style={styles.options__item}>
          <CommunityIcons
            name={Data.activities.activitieThree.icon}
            style={styles.item__icon}
          />
          <Text style={styles.item__text}>
            {Data.activities.activitieThree.name}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.description.text}>{Data.text}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Status;
