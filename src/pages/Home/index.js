import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';

import {getEntriesDailys} from '../../data/DailyEntries';

function Home({navigation}) {
  const [dailysList, setDailysList] = React.useState(null);

  React.useEffect(() => {
    async function componentDidMount() {
      await getEntriesDailys()
        .then(response => {
          setDailysList(response.dataEntriesDailys);
        })
        .catch(error => {
          console.warn(error);
          throw error;
        });
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
          const daily = {
            image: mood,
            date: dateFull,
            hours: hoursFull,
            activities: activities,
            text: short_description,
            id: id,
          };
          navigation.navigate('Status', daily);
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
        <View style={styles.loading}>
          <Text style={styles.loading.text}>Carregando</Text>
          <ActivityIndicator size="large" color="#304FFE" />
        </View>
      )}
    </SafeAreaView>
  );
}

export default Home;
