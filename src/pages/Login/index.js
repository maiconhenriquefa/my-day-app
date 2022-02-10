import React from 'react';
import {
  Alert,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

function Login() {
  function handleClick() {
    Alert.alert('Segunda tela', 'Ainda em construção ...');
  }

  return (
    <View>
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
        onPress={() => {
          handleClick();
        }}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
