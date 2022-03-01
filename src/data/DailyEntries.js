import axios from 'axios';
import {item} from './ApiCollection.json';

const urlDefaultDailys = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
});

export async function getDailys() {
  let dataDailys;
  await urlDefaultDailys
    .get('?username=maicon')
    .then(response => {
      dataDailys = response.data;
    })
    .catch(error => {
      throw error;
    });
  return {dataDailys};
}

export async function addNewDaily(newUser) {
  await urlDefaultDailys
    .post('', newUser)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.warn(error));
}

export async function updateDaily(daily, id) {
  await urlDefaultDailys
    .put(`/${id}`, daily)
    .then(response => {
      const data = response.data;
      console.warn(data);
    })
    .catch(error => console.warn(error));
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
        .catch(error => console.warn(error)),
    );
  } else {
    urlDefaultDailys
      .delete(`/${id}`)
      .then(response => {
        const data = response.data;
        console.warn(data);
      })
      .catch(error => console.warn(error));
  }
}
