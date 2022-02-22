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

const Add = ({navigation}) => {
  // const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Modal
      animationType={'slide'}
      statusBarTranslucentprop={true}
      // transparent={false}
      // visible={isVisible}
      // onRequestClose={() => {
      //   setIsVisible(false);
      // }}>
    >
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
          <View style={styles.emoticons__item}>
            <Image
              style={styles.emoticons__img}
              source={require('../../assets/happy.png')}
            />
            <Text>Bem</Text>
          </View>
          <View style={styles.emoticons__item}>
            <Image
              style={styles.emoticons__img}
              source={require('../../assets/happy.png')}
            />
            <Text>Bem</Text>
          </View>
          <View style={styles.emoticons__item}>
            <Image
              style={styles.emoticons__img}
              source={require('../../assets/happy.png')}
            />
            <Text>Bem</Text>
          </View>
          <View style={styles.emoticons__item}>
            <Image
              style={styles.emoticons__img}
              source={require('../../assets/happy.png')}
            />
            <Text>Bem</Text>
          </View>
          <View style={styles.emoticons__item}>
            <Image
              style={styles.emoticons__img}
              source={require('../../assets/happy.png')}
            />
            <Text>Bem</Text>
          </View>
        </View>
        <View style={styles.activities}>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
          <View style={styles.activities__item}>
            <View style={styles.box__icon}>
              <CommunityIcons name="car" style={styles.activities__icon} />
            </View>
            <Text>festa</Text>
          </View>
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
