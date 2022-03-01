import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';

import DataItem from '../../mocks/statusItem';
import {getDailys} from '../../data/DailyEntries';

function Home({navigation}) {
  const [dailysList, setDailysList] = React.useState(null);

  React.useEffect(() => {
    async function componentDidMount() {
      try {
        const {dataDailys} = await getDailys();
        setDailysList(dataDailys);
      } catch (error) {
        console.warn(error);
      }
    }
    componentDidMount();
  }, [dailysList]);

  const renderItem = ({
    item: {id, mood, created_at, short_description, activities},
  }) => {
    const date = new Date(created_at);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursFull = `${hours}:${minutes}`;

    const monthInYears = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    const day = date.getDate();
    const month = date.getMonth();
    const today = new Date().getDate();

    function isTodayOrTomorrow(dayValue, todayValue) {
      if (day === today) {
        return 'Hoje,';
      } else if (day === today - 1) {
        return 'Ontem,';
      } else {
        return '';
      }
    }
    const dateFull = `${isTodayOrTomorrow()} ${day} de ${monthInYears[month]}`;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          DataItem.image = mood;
          DataItem.date = dateFull;
          DataItem.hours = hoursFull;
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
          hours={hoursFull}
          date={dateFull}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {dailysList ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 25}}
          data={dailysList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.loading}>carregando</Text>
      )}
    </SafeAreaView>
  );
}

export default Home;
