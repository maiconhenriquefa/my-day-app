import React from 'react';
import {View, Text, Image} from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function ItemStatus({
  statusText,
  statusTitle,
  statusEmoji,
  color,
  date,
  hours,
  activities,
}) {
  const {activitieOne, activitieTwo, activitieThree} = activities;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.emoticon} source={statusEmoji} />
        <View style={styles.status}>
          <Text style={styles.status.date}>{date}</Text>
          <View style={styles.status__details}>
            <Text style={[styles.details__title, {color: color}]}>
              {statusTitle}
            </Text>
            <Text style={styles.details__hours}>{hours}</Text>
          </View>
        </View>
      </View>
      <View style={styles.options}>
        <CommunityIcons
          style={styles.options.activities}
          name={activitieOne.icon}
        />
        <Text style={styles.options.text}>{activitieOne.name}</Text>
        <Entypo name="dot-single" color="black" size={20} />
        <Icon style={styles.options.activities} name={activitieTwo.icon} />
        <Text style={styles.options.text}>{activitieTwo.name}</Text>
        <Entypo name="dot-single" color="black" size={20} />
        <CommunityIcons
          style={styles.options.activities}
          name={activitieThree.icon}
        />
        <Text style={styles.options.text}>{activitieThree.name}</Text>
      </View>
      <View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {statusText}
        </Text>
      </View>
    </View>
  );
}

export default ItemStatus;
