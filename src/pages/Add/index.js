import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, ScrollView} from 'react-native';

const Add = () => {
  // const [dayList, setDayList] = React.useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        <ItemStatus statusEmoji="disappointed" statusText="MAL" color="blue" />
        <ItemStatus statusEmoji="sob" statusText="TRISTE" color="green" />
        <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
        <ItemStatus statusEmoji="grinning" statusText="BEM" color="red" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add;
