import axios from 'axios';
import {item} from './ApiCollection.json';

const urlDefaultDailys = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
});

export async function getDailys() {
  let data;
  await urlDefaultDailys
    .get('?username=maicon')
    .then(response => {
      data = response.data;
    })
    .catch(error => console.log(error));
  return data;
}

export function addNewDaily(newUser) {
  urlDefaultDailys
    .post('', newUser)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.log(error));
}

export function updateDaily(daily, id) {
  urlDefaultDailys
    .put(`/${id}`, daily)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.error(error));
}

export function deleteDaily(...id) {
  if (id.length > 1) {
    id.map(itemId =>
      urlDefaultDailys
        .delete(`/${itemId}`)
        .then(response => {
          const data = response.data;
          console.warn(data);
        })
        .catch(error => console.log(error)),
    );
  } else {
    urlDefaultDailys
      .delete(`/${id}`)
      .then(response => {
        const data = response.data;
        console.warn(data);
      })
      .catch(error => console.log(error));
  }
}
