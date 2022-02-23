import axios from 'axios';
import {item} from './ApiCollection.json';

const urlDefault = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
});

export function getUsers() {
  urlDefault
    .get('?username=maicon')
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.log(error));
}

export function addNewUser(newUser) {
  urlDefault
    .post('', newUser)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.log(error));
}

export function updateUser(user, id) {
  urlDefault
    .put(`/${id}`, user)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.error(error));
}

export function deleteUser(...id) {
  if (id.length > 1) {
    id.map(itemId =>
      urlDefault
        .delete(`/${itemId}`)
        .then(response => {
          const data = response.data;
          console.warn(data);
        })
        .catch(error => console.log(error)),
    );
  } else {
    urlDefault
      .delete(`/${id}`)
      .then(response => {
        const data = response.data;
        console.warn(data);
      })
      .catch(error => console.log(error));
  }
}
