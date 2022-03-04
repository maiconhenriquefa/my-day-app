function ConfigEmoticons(mood) {
  // const characteristicsEmoticons = [
  //   {
  //     emoticonText: 'happy',
  //     title: 'bem',
  //     color: 'red',
  //     emoticon: require('../../assets/happy.png'),
  //   },
  //   {
  //     emoticonText: 'confused',
  //     title: 'confuso',
  //     color: 'blue',
  //     emoticon: require('../../assets/confused.png'),
  //   },
  //   {
  //     emoticonText: 'sad',
  //     title: 'triste',
  //     color: 'green',
  //     emoticon: require('../../assets/sad.png'),
  //   },
  //   {
  //     emoticonText: 'sleeping',
  //     title: 'sono',
  //     color: 'orange',
  //     emoticon: require('../../assets/sleeping.png'),
  //   },
  //   {
  //     emoticonText: 'nervous',
  //     title: 'mal',
  //     color: 'purple',
  //     emoticon: require('../../assets/nervous.png'),
  //   },
  // ];

  // const emoticon = characteristicsEmoticons.filter(({emoticon}) => emoticon);
  // const title = characteristicsEmoticons.filter(({title}) => title);
  // const color = characteristicsEmoticons.filter(({color}) => color);

  let emoticon;
  let title;
  let color;
  switch (mood) {
    case 'happy':
      emoticon = require('../../assets/happy.png');
      title = 'Bem';
      color = 'red';
      break;
    case 'nervous':
      emoticon = require('../../assets/nervous.png');
      title = 'Mal';
      color = 'blue';
      break;
    case 'sad':
      emoticon = require('../../assets/sad.png');
      title = 'Triste';
      color = 'green';
      break;
    case 'confused':
      emoticon = require('../../assets/confused.png');
      title = 'Confuso';
      color = 'orange';
      break;
    case 'sleeping':
      emoticon = require('../../assets/sleeping.png');
      title = 'Sono';
      color = 'purple';
      break;
    default:
      emoticon = require('../../assets/happy.png');
      title = 'Bem';
      color = 'red';
  }
  return {emoticon, title, color};
}

export default ConfigEmoticons;
