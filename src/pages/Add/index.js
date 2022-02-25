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
import ItemEmoticon from '../../components/ItemEmoticon';
import ItemActivities from '../../components/ItemActivities';
import Activities from '../../data/Activities';
import happy from '../../assets/happy.png';
import confused from '../../assets/confused.png';
import nervous from '../../assets/nervous.png';
import sad from '../../assets/sad.png';
import sleeping from '../../assets/sleeping.png';
import {updateDaily, addNewDaily, deleteDaily} from '../../data/DailyEntries';

const Add = ({navigation}) => {
  const {dataActivities} = Activities();

  React.useEffect(() => {
    const dailyEntry = {
      mood: 'sad',
      activity_ids: [1, 3],
      description: 'testando',
      username: 'maicon',
    };
    const formData = new FormData();
    formData.append('daily_entry', JSON.stringify(dailyEntry));
    console.warn(JSON.stringify(dailyEntry));

    addNewDaily(JSON.stringify(dailyEntry));
  }, []);

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
            <ItemEmoticon text={'Bem'} color={'red'} emoticon={happy} />
            <ItemEmoticon text={'Confuso'} color={'blue'} emoticon={confused} />
            <ItemEmoticon text={'Triste'} color={'green'} emoticon={sad} />
            <ItemEmoticon text={'Sono'} color={'orange'} emoticon={sleeping} />
            <ItemEmoticon text={'Mal'} color={'purple'} emoticon={nervous} />
          </View>
          <View style={styles.activities}>
            {dataActivities.map(({id, name}) => {
              return <ItemActivities key={id} name={name} />;
            })}
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
    )
  );
};

export default Add;
