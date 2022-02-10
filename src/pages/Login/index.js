import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
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
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
