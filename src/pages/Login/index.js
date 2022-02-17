import React from 'react';
import {TextInput, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-tempo.png')}
      />
      <TextInput style={styles.input} placeholder={'e-mail'} />
      <TextInput
        style={styles.input}
        placeholder={'senha'}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'HomeStackScreen'}],
          })
        }>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
