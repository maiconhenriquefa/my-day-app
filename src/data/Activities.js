import axios from 'axios';
import React from 'react';

function Activities() {
  const [dataActivities, setDataActivities] = React.useState(null);

  const urlDefaultActivities = axios.create({
    baseURL: 'https://shrouded-shelf-01513.herokuapp.com/activities',
  });

  function getActivities() {
    urlDefaultActivities
      .get()
      .then(response => {
        setDataActivities(response.data);
      })
      .catch(error => console.warn(error));
  }
  getActivities();

  return {dataActivities};
}

export default Activities;
