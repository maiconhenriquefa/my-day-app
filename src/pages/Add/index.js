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
import happy from '../../assets/happy.png';
import confused from '../../assets/confused.png';
import nervous from '../../assets/nervous.png';
import sad from '../../assets/sad.png';
import sleeping from '../../assets/sleeping.png';
import {updateDaily, addNewDaily, deleteDaily} from '../../data/DailyEntries';

const emoticonList = [
  {text: 'bem', color: 'red', emoticon: happy},
  {text: 'confuso', color: 'blue', emoticon: confused},
  {text: 'triste', color: 'green', emoticon: sad},
  {text: 'sono', color: 'orange', emoticon: sleeping},
  {text: 'mal', color: 'purple', emoticon: nervous},
];

const Add = ({navigation}) => {
  const [dataSaved, setDataSaved] = React.useState({
    daily_entry: {
      mood: 'happy',
      activity_ids: [1, 2],
      description: 'teste',
      username: 'maicon',
    },
  });

  const [isEmoji, setIsEmoji] = React.useState(false);
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
            {emoticonList.map(({text, emoticon, color}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setIsEmoji(!isEmoji);
                    setDataSaved({
                      ...dataSaved,
                      mood: emoticon,
                    });
                  }}>
                  <ItemEmoticon
                    active={isEmoji}
                    key={emoticon}
                    text={text}
                    color={color}
                    emoticon={emoticon}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.activities}>
            {dataActivities.map(({id, name}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setDataSaved(dataSaved =>
                      dataSaved.daily_entry.activity_ids.push(id),
                    );
                    console.warn(dataSaved);
                  }}>
                  <ItemActivities key={id} name={name} />
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
