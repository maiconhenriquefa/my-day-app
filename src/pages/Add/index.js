import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import api from '../../data/api';
import ItemEmoticon from '../../components/ItemEmoticon';
import ItemActivities from '../../components/ItemActivities';

api
  .get('daily_entries?username=joaopedro')
  .then(response => console.warn(response.data[0].mood));

const Add = ({navigation, route}) => {
  return (
    <Modal animationType={'slide'} statusBarTranslucentprop={true}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.container}>
        <TouchableOpacity
          style={styles.item__backClose}
          onPress={() => navigation.navigate('HomeEmpty')}>
          <AntDesign name="close" style={styles.item__backClose.icon} />
        </TouchableOpacity>
        <Text style={styles.ask}>Como você está?</Text>
        <View style={styles.times}>
          <View style={styles.date}>
            <SimpleLineIcons name="calendar" color="#969696" size={14} />
            <Text style={styles.times__text}>HOJE, 23 DE JANEIRO</Text>
          </View>
          <View style={styles.hours}>
            <SimpleLineIcons name="clock" color="#969696" size={14} />
            <Text style={styles.times__text}>08:35</Text>
          </View>
        </View>
        <View style={styles.emoticons}>
          <ItemEmoticon />
          <ItemEmoticon />
          <ItemEmoticon />
          <ItemEmoticon />
          <ItemEmoticon />
          <ItemEmoticon />
        </View>
        <View style={styles.activities}>
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
          <ItemActivities />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui o que aconteceu hoje..."
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button__text}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

export default Add;
