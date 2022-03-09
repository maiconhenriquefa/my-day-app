export default function getCharacteristicEmoticon() {
  const emoticonList = [
    {
      emoticonText: 'happy',
      text: 'bem',
      color: 'red',
      emoticon: require('../../assets/happy.png'),
    },
    {
      emoticonText: 'confused',
      text: 'confuso',
      color: 'blue',
      emoticon: require('../../assets/confused.png'),
    },
    {
      emoticonText: 'sad',
      text: 'triste',
      color: 'green',
      emoticon: require('../../assets/sad.png'),
    },
    {
      emoticonText: 'sleeping',
      text: 'sono',
      color: 'orange',
      emoticon: require('../../assets/sleeping.png'),
    },
    {
      emoticonText: 'nervous',
      text: 'mal',
      color: 'purple',
      emoticon: require('../../assets/nervous.png'),
    },
  ];
  return emoticonList;
}
