import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {listIconsActivities} from '../../components/ItemActivities';
import {listNamesActivities} from '../../components/ItemActivities';

import {getDaily} from '../../data/DailyEntries';

function Status({navigation, route}) {
  const dataDailys = route.params;
  const idDaily = route.params.id;
  const [daily, setDaily] = React.useState(null);

  React.useEffect(() => {
    async function componentDidMount() {
      await getDaily(idDaily)
        .then(response => {
          setDaily(response.dataDailys);
        })
        .catch(error => {
          console.warn(error);
          throw error;
        });
    }
    componentDidMount();
  }, [daily, idDaily]);

  let emoticon;
  let title;
  let color;
  switch (daily && daily.mood) {
    case 'happy':
      emoticon = require('../../assets/happy.png');
      title = 'Bem';
      color = 'red';
      break;
    case 'nervous':
      emoticon = require('../../assets/nervous.png');
      title = 'Mal';
      color = 'blue';
      break;
    case 'sad':
      emoticon = require('../../assets/sad.png');
      title = 'Triste';
      color = 'green';
      break;
    case 'confused':
      emoticon = require('../../assets/confused.png');
      title = 'Confuso';
      color = 'orange';
      break;
    case 'sleeping':
      emoticon = require('../../assets/sleeping.png');
      title = 'Sono';
      color = 'purple';
      break;
    default:
      emoticon = require('../../assets/happy.png');
      title = 'Bem';
      color = 'red';
  }

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
        <Image style={styles.status.emotion} source={emoticon} />
        <Text style={[styles.status.text, {color: color}]}>{title}</Text>
      </View>
      <View style={styles.options}>
        {daily &&
          daily.activities.map(({id, name}) => {
            return (
              <View style={styles.options__item}>
                <MaterialIcons
                  name={listIconsActivities[name]}
                  style={styles.item__icon}
                />
                <Text style={styles.item__text}>
                  {listNamesActivities[name]}
                </Text>
              </View>
            );
          })}
      </View>
      <View style={styles.description}>
        {daily && (
          <Text style={styles.description.text}>{daily.description}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Status;
