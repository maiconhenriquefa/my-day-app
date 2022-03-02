import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const listNamesActivities = {
  sports: 'esportes',
  cooking: 'cozinhar',
  games: 'jogos',
  shopping: 'compras',
  good_meal: 'boa refeição',
  party: 'festa',
  rest: 'descanso',
  date: 'encontro',
  movies: 'filmes e séries',
};

export const listIconsActivities = {
  sports: 'directions-run',
  cooking: 'local-dining',
  games: 'sports-esports',
  shopping: 'shopping-cart',
  good_meal: 'dinner-dining',
  party: 'celebration',
  rest: 'self-improvement',
  date: 'location-on',
  movies: 'local-movies',
};

function ItemActivities({id, name, style, color}) {
  return (
    <View style={styles.activities__item}>
      <View style={[styles.box__icon, style]}>
        <MaterialIcons
          key={id}
          name={listIconsActivities[name]}
          style={[styles.activities__icon, {color: color}]}
        />
      </View>
      <View>
        <Text style={styles.activities__text}>{listNamesActivities[name]}</Text>
      </View>
    </View>
  );
}

export default ItemActivities;
