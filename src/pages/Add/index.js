import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';

function Add({navigation, route}) {
  // const [dayList, setDayList] = React.useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
          }}>
          <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
            navigation.setOptions({tabBarVisible: false});
          }}>
          <ItemStatus
            statusEmoji="disappointed"
            statusText="MAL"
            color="blue"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
          }}>
          <ItemStatus statusEmoji="sob" statusText="TRISTE" color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
          }}>
          <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
          }}>
          <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Status');
          }}>
          <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Add;
