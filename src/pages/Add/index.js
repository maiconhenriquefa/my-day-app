import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import Data from '../../mocks';

function Add({navigation}) {
  // const [dayList, setDayList] = React.useState([]);
  const renderItem = ({item: {title, image, text, color}}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Status');
        }}>
        <ItemStatus
          statusEmoji={image}
          statusText={text}
          statusTitle={title}
          color={color}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 25}}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Add;
