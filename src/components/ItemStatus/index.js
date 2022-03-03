import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Activities from '../../data/Activities';
import {listIconsActivities} from '../ItemActivities';
import {listNamesActivities} from '../ItemActivities';
import DateFormat from '../DateFormat';
import EmoticonConfig from '../EmoticonConfig';

function ItemStatus({description, emoji, date, hours, activities}) {
  const {emoticon, title, color} = EmoticonConfig(emoji);

  const [listActivities, setListActivities] = React.useState([]);
  React.useEffect(() => {
    async function componentDidMount() {
      const {dataActivities} = await Activities();
      setListActivities(dataActivities);
    }
    componentDidMount();
  }, [listActivities]);

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
        {activities.map(({id, name}, index) => {
          return (
            <View style={styles.options}>
              {index > 0 && (
                <Entypo name="dot-single" color="black" size={20} />
              )}
              <MaterialIcons
                style={styles.options.activities}
                key={id}
                name={listIconsActivities[name]}
              />
              <Text style={styles.options.text}>
                {listNamesActivities[name]}
              </Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </View>
  );
}

export default ItemStatus;
