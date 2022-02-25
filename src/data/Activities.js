import axios from 'axios';
import React from 'react';

const Activities = () => {
  const [dataActivities, setDataActivities] = React.useState(null);

  const urlDefaultActivities = axios.create({
    baseURL: 'https://shrouded-shelf-01513.herokuapp.com/activities',
  });

  async function getActivities() {
    await urlDefaultActivities
      .get()
      .then(response => {
        setDataActivities(response.data);
      })
      .catch(error => console.warn(error.message));
  }
  getActivities();

  return {
    dataActivities,
  };
};

export default Activities;

// import axios from 'axios';
// import React from 'react';

// const Activities = () => {
//   const [data, setData] = React.useState(null);

//   const urlDefaultActivities = axios.create({
//     baseURL: 'https://shrouded-shelf-01513.herokuapp.com/activities',
//   });

//   React.useEffect(() => {
//     async function getActivities() {
//       await urlDefaultActivities
//         .get()
//         .then(response => {
//           const dataValue = response.data;
//           setData(dataValue);
//         })
//         .catch(error => console.warn(error));
//     }
//     getActivities();
//   }, [data]);

//   return {
//     data,
//   };
// };

// export default Activities;
