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
      mood: '',
      activity_ids: [],
      description: '',
      username: 'maicon',
    },
  });

  const [isActiveEmoticon, setIsActiveEmoticon] = React.useState();
  const [listDataActive, setListDataActive] = React.useState([]);
  const [isActiveActive, setIsActiveActive] = React.useState([]);
  const {dataActivities} = Activities();

  function OnChangeSaved() {
    navigation.navigate('Home');
    addNewDaily(dataSaved);
    console.warn(dataSaved);
  }

  React.useEffect(() => {
    return setDataSaved(dataSaved);
  }, [dataSaved]);

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
            {dataActivities.map(({id, name}, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (listDataActive.length < 2) {
                      setListDataActive([...listDataActive, id]);
                      setIsActiveActive([...isActiveActive, index]);
                    }
                    if (isActiveActive.includes(index)) {
                      const fullActives = isActiveActive.filter(
                        active => active !== index,
                      );
                      setListDataActive([...fullActives]);
                      setIsActiveActive([...fullActives]);
                    }
                    setDataSaved(prevState => ({
                      daily_entry: {
                        ...prevState.daily_entry,
                        activity_ids: [...listDataActive], // copy all other key-value pairs of food object
                      },
                    }));
                    console.warn(listDataActive.length);
                  }}>
                  <ItemActivities
                    key={id}
                    name={name}
                    style={
                      isActiveActive.includes(index) && styles.activities.active
                    }
                    color={isActiveActive.includes(index) ? '#eee' : '#111'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Escreva aqui o que aconteceu hoje..."
            onChangeText={description => {
              setDataSaved(prevState => ({
                daily_entry: {
                  ...prevState.daily_entry,
                  description: description, // copy all other key-value pairs of food object
                },
              }));
            }}
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
