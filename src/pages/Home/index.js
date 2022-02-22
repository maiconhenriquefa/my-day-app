import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import DataList from '../../mocks/statusList';
import DataItem from '../../mocks/statusItem';

function Home({navigation}) {
  // const [dayList, setDayList] = React.useState([]);
  const renderItem = ({
    item: {image, date, hours, title, color, activities, text, id},
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          DataItem.image = image;
          DataItem.date = date;
          DataItem.hours = hours;
          DataItem.title = title;
          DataItem.color = color;
          DataItem.activities = activities;
          DataItem.text = text;
          DataItem.id = id;
          navigation.navigate('Status');
        }}>
        <ItemStatus
          statusEmoji={image}
          statusText={text}
          statusTitle={title}
          color={color}
          activities={activities}
          hours={hours}
          date={date}
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

export default Home;
