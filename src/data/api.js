import axios from 'axios';
import {item} from './ApiCollection.json';

const api = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com',
});

export function getUsers() {
  api
    .get('daily_entries?username=joaopedro')
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.log(error));
}

export function addNewUser(newUser) {
  api
    .post('/daily_entries', newUser)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.error(error));
}
