import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
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
  item__header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item__emoticon: {
    width: 57,
    height: 57,
    marginRight: 20,
  },
  item__status: {
    justifyContent: 'center',
  },
  item__details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item__title: {
    marginRight: 10,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: 24,
  },
  item__situation: {
    marginRight: 10,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: 24,
  },
  item__date: {
    fontSize: 14,
  },
  item__options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000',
      marginRight: 5,
    },
  },
  options__activities: {
    fontSize: 20,
    marginRight: 10,
    color: 'black',
  },
  item_description: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 5,
  },
});

export default styles;
