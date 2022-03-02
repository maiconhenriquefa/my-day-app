import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {listIconsActivities} from '../../components/ItemActivities';
import {listNamesActivities} from '../../components/ItemActivities';

function Status({navigation, route}) {
  const dataDailys = route.params;
  console.warn(dataDailys.activities);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.item__backLeft}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" style={styles.item__backLeft.icon} />
      </TouchableOpacity>
      <View style={styles.hours}>
        <SimpleLineIcons name="clock" color="#969696" size={14} />
        <Text style={styles.hours.text}>{dataDailys.hours}</Text>
      </View>
      <View style={styles.date}>
        <SimpleLineIcons name="calendar" color="#969696" size={14} />
        <Text style={styles.date.text}>{dataDailys.date}</Text>
      </View>
      <View style={styles.status}>
        <Image style={styles.status.emotion} source={dataDailys.image} />
        <Text style={[styles.status.text, {color: dataDailys.color}]}>
          {dataDailys.title}
        </Text>
      </View>
      <View style={styles.options}>
        {dataDailys.activities.map(({id, name}) => {
          return (
            <View style={styles.options__item}>
              <MaterialIcons
                name={listIconsActivities[name]}
                style={styles.item__icon}
              />
              <Text style={styles.item__text}>{listNamesActivities[name]}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.description}>
        <Text style={styles.description.text}>{dataDailys.text}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Status;
