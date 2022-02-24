import axios from 'axios';
import React from 'react';

const Activities = () => {
  const [data, setData] = React.useState(null);

  const urlDefaultActivities = axios.create({
    baseURL: 'https://shrouded-shelf-01513.herokuapp.com/activities',
  });

  async function getActivities() {
    await urlDefaultActivities
      .get()
      .then(response => {
        const dataValue = response.data;
        setData(dataValue);
      })
      .catch(error => console.warn(error));
  }
  getActivities();
  return {
    data,
  };
};

export default Activities;
