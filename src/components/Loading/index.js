import React from 'react';
import {View, SafeAreaView, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loading}>
        <Text style={styles.loading.text}>Carregando</Text>
        <ActivityIndicator size="large" color="#304FFE" />
      </View>
    </SafeAreaView>
  );
}

export default Loading;
