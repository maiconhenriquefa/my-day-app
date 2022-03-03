function ConfigEmoticons(mood) {
  // const characteristicsEmoticons = [
  //   {
  //     happy: {
  //       emoticon: require('../../assets/happy.png'),
  //       title: 'Bem',
  //       color: 'red',
  //     },
  //   },
  //   {
  //     nervous: {
  //       emoticon: require('../../assets/nervous.png'),
  //       title: 'Mal',
  //       color: 'blue',
  //     },
  //   },
  //   {
  //     sad: {
  //       emoticon: require('../../assets/sad.png'),
  //       title: 'Triste',
  //       color: 'green',
  //     },
  //   },
  //   {
  //     confused: {
  //       emoticon: require('../../assets/confused.png'),
  //       title: 'Confuso',
  //       color: 'orange',
  //     },
  //   },
  //   {
  //     sleeping: {
  //       emoticon: require('../../assets/sleeping.png'),
  //       title: 'Sono',
  //       color: 'purple',
  //     },
  //   },
  // ];
  // console.warn(characteristicsEmoticons);

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
