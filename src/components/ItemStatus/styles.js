import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    minHeight: 158,
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#5a6cea',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    paddingHorizontal: 28,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  emoticon: {
    width: 57,
    height: 57,
    marginRight: 20,
  },
  status: {
    justifyContent: 'center',
    date: {
      textTransform: 'uppercase',
    },
  },
  status__details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details__title: {
    marginRight: 10,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: 24,
  },
  details__hours: {
    fontSize: 14,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000',
      marginRight: 5,
    },
    activities: {
      fontSize: 20,
      marginRight: 10,
      color: 'black',
    },
  },
  description: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 5,
  },
});

export default styles;
