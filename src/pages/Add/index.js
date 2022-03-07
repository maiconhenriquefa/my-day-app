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
import {addNewDaily} from '../../data/DailyEntries';
import Loading from '../../components/Loading';
import EmoticonList from '../../components/EmoticonList';
import DateFormat from '../../components/DateFormat';

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
  const {hoursFull, dateFull} = DateFormat(new Date());
  const {dataActivities} = Activities();

  function OnChangeSaved() {
    navigation.navigate('Home');
    addNewDaily(dataSaved);
  }

  return dataActivities ? (
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
            <Text style={styles.times__text}>{dateFull}</Text>
          </View>
          <View style={styles.hours}>
            <SimpleLineIcons name="clock" color="#969696" size={14} />
            <Text style={styles.times__text}>{hoursFull}</Text>
          </View>
        </View>
        <View style={styles.emoticons}>
          {EmoticonList().map(
            ({text, emoticon, color, emoticonText}, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setIsActiveEmoticon(index);
                    setDataSaved(prevState => ({
                      daily_entry: {
                        ...prevState.daily_entry,
                        mood: emoticonText,
                      },
                    }));
                  }}>
                  <ItemEmoticon
                    style={
                      isActiveEmoticon === index && styles.emoticons.active
                    }
                    key={index}
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
                key={index}
                onPress={() => {
                  if (listDataActive.length < 3) {
                    setListDataActive([...listDataActive, id]);

                    setDataSaved(prevState => ({
                      daily_entry: {
                        ...prevState.daily_entry,
                        activity_ids: [
                          ...prevState.daily_entry.activity_ids,
                          id,
                        ],
                      },
                    }));
                  }
                  if (listDataActive.includes(id)) {
                    const fullListActives = listDataActive.filter(active => {
                      return active !== id;
                    });
                    setListDataActive([...fullListActives]);

                    setDataSaved(prevState => ({
                      daily_entry: {
                        ...prevState.daily_entry,
                        activity_ids: [...fullListActives],
                      },
                    }));
                  }
                }}>
                <ItemActivities
                  key={index}
                  name={name}
                  style={
                    listDataActive.includes(id) && styles.activities.active
                  }
                  color={listDataActive.includes(id) ? '#eee' : '#111'}
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
                description: description,
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
  ) : (
    <Loading />
  );
};

export default Add;
