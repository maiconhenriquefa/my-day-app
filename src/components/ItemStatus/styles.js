import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-around',
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
  },
  item__emoticon: {
    width: 57,
    height: 57,
    marginRight: 10,
  },
  item__status: {
    justifyContent: 'center',
  },
  item__details: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'space-around',
  },
  item_description: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 5,
  },
});

export default styles;
