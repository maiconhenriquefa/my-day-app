import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import DataList from '../../mocks/statusList';
import DataItem from '../../mocks/statusItem';
import {getDailys} from '../../data/DailyEntries';

// const emoticonListImg = [happy, , mal, triste, confused, nervous];

function Home({navigation}) {
  const [dailysList, setDailysList] = React.useState('');
  React.useEffect(() => {
    async function componentDidMount() {
      const dataDailys = await getDailys();
      setDailysList(dataDailys);
      // console.warn(getDailys());
    }
    componentDidMount();
  }, [dailysList]);

  const renderItem = ({
    item: {
      id,
      mood,
      created_at,
      updated_at,
      username,
      short_description,
      activities,
    },
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          DataItem.image = mood;
          DataItem.date = updated_at;
          DataItem.hours = created_at;
          DataItem.title = mood;
          DataItem.color = '#000';
          DataItem.activities = activities;
          DataItem.text = short_description;
          DataItem.id = id;
          navigation.navigate('Status');
        }}>
        <ItemStatus
          statusEmoji={mood}
          statusText={short_description}
          statusTitle={mood}
          color="#000"
          activities={activities}
          hours={created_at}
          date={updated_at}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 25}}
        data={dailysList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Home;
