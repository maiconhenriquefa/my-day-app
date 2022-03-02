import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemEmoticon from '../../components/ItemEmoticon';
import ItemActivities from '../../components/ItemActivities';
import Activities from '../../data/Activities';
import {updateDaily, addNewDaily, deleteDaily} from '../../data/DailyEntries';

const emoticonList = [
  {
    emoticonText: 'happy',
    text: 'bem',
    color: 'red',
    emoticon: require('../../assets/happy.png'),
  },
  {
    emoticonText: 'confused',
    text: 'confuso',
    color: 'blue',
    emoticon: require('../../assets/confused.png'),
  },
  {
    emoticonText: 'sad',
    text: 'triste',
    color: 'green',
    emoticon: require('../../assets/sad.png'),
  },
  {
    emoticonText: 'sleeping',
    text: 'sono',
    color: 'orange',
    emoticon: require('../../assets/sleeping.png'),
  },
  {
    emoticonText: 'nervous',
    text: 'mal',
    color: 'purple',
    emoticon: require('../../assets/nervous.png'),
  },
];

const Add = ({navigation}) => {
  const [dataSaved, setDataSaved] = React.useState({
    daily_entry: {
      mood: 'happy',
      activity_ids: [],
      description: 'teste',
      username: 'maicon',
    },
  });

  const [isActiveEmoticon, setIsActiveEmoticon] = React.useState();
  const [isActiveActivities, setIsActiveActivities] = React.useState([]);
  const {dataActivities} = Activities();

  function OnChangeSaved() {
    navigation.navigate('Home');
    addNewDaily(dataSaved);
  }

  return (
    dataActivities && (
      <Modal animationType={'slide'} statusBarTranslucentprop={true}>
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          style={styles.container}>
          <TouchableOpacity
            style={styles.item__backClose}
            onPress={() => navigation.navigate('Home')}>
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
            {emoticonList.map(
              ({text, emoticon, color, emoticonText}, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setIsActiveEmoticon(index);
                      setDataSaved(prevState => ({
                        daily_entry: {
                          ...prevState.daily_entry,
                          mood: emoticonText, // copy all other key-value pairs of food object
                        },
                      }));
                      console.warn(dataSaved);
                    }}>
                    <ItemEmoticon
                      style={
                        isActiveEmoticon === index && styles.emoticons.active
                      }
                      key={emoticon}
                      text={text}
                      color={isActiveEmoticon === index ? color : '#969696'}
                      emoticon={emoticon}
                    />
                  </TouchableOpacity>
                );
              },
            )}
          </View>
          <View style={styles.activities}>
            {dataActivities.map(({id, name}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setDataSaved();
                    console.warn(dataSaved);
                  }}>
                  <ItemActivities
                    key={id}
                    name={name}
                    // style={
                    //   isActiveEmoticon === index && styles.emoticons.active
                    // }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Escreva aqui o que aconteceu hoje..."
            onChangeText={description =>
              setDataSaved({...dataSaved, description: description})
            }
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              OnChangeSaved();
            }}>
            <Text style={styles.button__text}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    )
  );
};

export default Add;
