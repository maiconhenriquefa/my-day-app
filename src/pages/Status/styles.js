import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    paddingTop: 47,
    paddingHorizontal: 22,
  },
  hours: {
    flexDirection: 'row',
    alignItems: 'center',
    text: {
      marginLeft: 10,
      color: '#969696',
      fontSize: 16,
      fontFamily: 'Source Sans Pro',
    },
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    text: {
      marginLeft: 10,
      color: '#969696',
      fontSize: 16,
      fontFamily: 'Source Sans Pro',
      textTransform: 'uppercase',
    },
  },
  status: {
    alignItems: 'center',
    marginVertical: 10,
    text: {
      color: '#E24B4B',
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: 20,
      textTransform: 'uppercase',
    },
    emotion: {
      fontSize: 57,
    },
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 158,
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    marginTop: 21,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#5a6cea',
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  options__item: {
    alignItems: 'center',
  },
  item__icon: {
    color: 'white',
    fontSize: 27,
    padding: 8,
    backgroundColor: '#304FFE',
    borderRadius: 60,
    marginBottom: 5,
  },
  item__text: {
    color: '#000',
    fontSize: 12,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#5a6cea',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    paddingHorizontal: 38,
    paddingVertical: 13,
    text: {
      color: '#000',
      lineHeight: 19,
      marginRight: 10,
      fontFamily: 'Source Sans Pro',
      fontSize: 13,
    },
  },
});

export default styles;
