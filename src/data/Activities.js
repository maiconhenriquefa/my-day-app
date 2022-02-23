import axios from 'axios';
import {item} from './ApiCollection.json';

const urlDefaultActivities = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/activities',
});

export function getActivities() {
  urlDefaultActivities
    .get()
    .then(response => {
      const data = response.data;
    })
    .catch(error => console.log(error));
}
