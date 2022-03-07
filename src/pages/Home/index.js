import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {getEntriesDailys} from '../../data/DailyEntries';
import DateFormat from '../../components/DateFormat';
import Loading from '../../components/Loading';

function Home({navigation}) {
  const [dailysList, setDailysList] = React.useState(null);

  React.useEffect(() => {
    async function componentDidMount() {
      const response = await getEntriesDailys();
      setDailysList(response);
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

  return dailysList ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 25}}
        data={dailysList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default Home;
