import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.nothingImage}
        source={require('../../assets/icons/NothingDay.png')}
      />
      <Text style={styles.text}>
        Você ainda não tem nenhum registro diário. Para começar, toque no ícone
        de adicionar na tela.
      </Text>
    </View>
  );
};

export default Home;
