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
import DateFormat from '../../components/DateFormat';

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
    const {hoursFull, dateFull} = DateFormat(created_at);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Status', id);
        }}>
        <ItemStatus
          emoji={mood}
          description={short_description}
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
