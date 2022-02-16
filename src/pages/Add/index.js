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

import DataList from '../../mocks/statusList';
import DataItem from '../../mocks/statusItem';

function Add({navigation}) {
  // const [dayList, setDayList] = React.useState([]);
  const renderItem = ({item: {title, image, text, color, id}}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          DataItem.title = title;
          DataItem.image = image;
          DataItem.text = text;
          DataItem.color = color;
          DataItem.id = id;
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
        data={DataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Add;
