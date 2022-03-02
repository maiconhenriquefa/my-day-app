import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  ask: {
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
  times: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hours: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  times__text: {
    marginLeft: 5,
  },
  emoticons: {
    width: 306,
    height: 71,
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    active: {
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#304FFE',
      width: 48,
      height: 48,
      margin: -2,
    },
  },
  activities: {
    Height: 300,
    borderWidth: 1,
    margin: 24,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 345,
    height: 89,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 15,
    fontSize: 13,
  },
  button: {
    marginTop: 22,
    marginBottom: 53,
    width: 345,
    height: 52,
    backgroundColor: '#304FFE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  button__text: {
    color: '#fff',
    fontWeight: '900',
  },
  item__backClose: {
    position: 'absolute',
    top: 5,
    left: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    borderRadius: 9,
    icon: {
      fontSize: 20,
      color: '#304FFE',
    },
  },
});

export default styles;
