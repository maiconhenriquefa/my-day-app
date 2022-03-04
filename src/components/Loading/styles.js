import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    text: {
      marginBottom: 20,
      textTransform: 'uppercase',
      fontSize: 24,
      textAlign: 'center',
    },
  },
});

export default styles;
