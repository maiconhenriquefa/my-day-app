import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import {
//   SimpleLineIcons,
//   Zocial,
//   Octicons,
//   MaterialCommunityIcons,
//   MaterialIcons,
//   Ionicons,
//   Foundation,
//   FontAwesome5,
//   FontAwesome,
//   Feather,
//   EvilIcons,
//   Entypo,
//   AntDesign,
// } from 'react-native-vector-icons/';

const categoryIconsList = [
  SimpleLineIcons,
  Zocial,
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Foundation,
  FontAwesome5,
  FontAwesome,
  Feather,
  EvilIcons,
  Entypo,
  AntDesign,
];

function ItemActivities({id, name}) {
  return (
    <View style={styles.activities__item}>
      <View style={styles.box__icon}>
        {/* {categoryIconsList.map(item => {
          const Component = item;
          console.warn(Component);
          if (Component.hasIcon(name)) {
            return (
              <Component key={id} name={name} style={styles.activities__icon} />
            );
          }
          return;
        })} */}
      </View>
      <Text>{name}</Text>
    </View>
  );
}

export default ItemActivities;
