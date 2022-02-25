import React from 'react';
import {View, Text, Image} from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import ItemEmoticon from '../ItemEmoticon';
import Activities from '../../data/Activities';
import {listIconsActivities} from '../ItemActivities';

function ItemStatus({
  statusText,
  statusTitle,
  statusEmoji,
  date,
  hours,
  activities,
}) {
  let emoticon;
  let title;
  let color;
  switch (statusEmoji) {
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
      color = 'Bem';
  }

  const [listActivities, setListActivities] = React.useState([]);

  React.useEffect(() => {
    async function componentDidMount() {
      const {dataActivities} = await Activities();
      setListActivities(dataActivities);
    }
    componentDidMount();
  }, [setListActivities]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.emoticon} source={emoticon} />
        <View style={styles.status}>
          <Text style={styles.status.date}>{date}</Text>
          <View style={styles.status__details}>
            <Text style={[styles.details__title, {color: color}]}>{title}</Text>
            <Text style={styles.details__hours}>{hours}</Text>
          </View>
        </View>
      </View>

      <View style={styles.options}>
        {/* {activities.map(({id, name}) => {
          return (
            <>
              <MaterialIcons key={id} name={listIconsActivities[name]} />
              <Text style={styles.options.text}>{listIconsActivities[id]}</Text>
            </>
          );
        })} */}
        {/* <CommunityIcons style={styles.options.activities} name={activities} />
        <Text style={styles.options.text}>{data.id}</Text> */}
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
