import React from 'react';
import styles from './styles';
import ItemStatus from '../../components/ItemStatus';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import urlDefaultDailys, {getEntriesDailys} from '../../data/DailyEntries';
import DateFormat from '../../components/DateFormat';
import Loading from '../../components/Loading';
import axios from 'axios';

function Home({navigation}) {
  const [dailysList, setDailysList] = React.useState(null);

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;

    // instância do source, onde está contido o token de cancelamento
    const source = CancelToken.source();
    async function componentDidMount() {
      const response = await urlDefaultDailys.get('?username=maicon', {
        cancelToken: source.token,
      });
      setDailysList(response.data);
    }
    componentDidMount();
    return () => {
      source.cancel();
    };
  }, []);

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
          key={id}
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
        data={dailysList ? dailysList : []}
        renderItem={dailysList ? renderItem : []}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default Home;
