import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles';

import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function Status() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hours}>
        <SimpleLineIcons name="clock" color="#969696" size={14} />
        <Text style={styles.hours.text}>08:35</Text>
      </View>
      <View style={styles.date}>
        <SimpleLineIcons name="calendar" color="#969696" size={14} />
        <Text style={styles.date.text}>hoje 23 de janeiro</Text>
      </View>
      <View style={styles.status}>
        <Image
          style={styles.status.emotion}
          source={require('./../../assets/happy.png')}
        />
        <Text style={styles.status.text}>Bem</Text>
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
        <Text style={styles.description.text}>
          Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma
          lasanha para minha família. E à noite, fui à festa de aniversário do
          meu amigo.
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Status;
