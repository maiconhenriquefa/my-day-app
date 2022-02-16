import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.nothingImage}
        name="emoji-neutral"
        color="#ACACAC"
        size={48}
      />
      <Text style={styles.text}>
        Você ainda não tem nenhum registro diário. Para começar, toque no ícone
        de adicionar na tela.
      </Text>
    </View>
  );
};

export default Home;
