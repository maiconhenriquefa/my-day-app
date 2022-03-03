import axios from 'axios';

const urlDefaultDailys = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
});

export async function getEntriesDailys() {
  let dataEntriesDailys;
  await urlDefaultDailys
    .get('?username=maicon')
    .then(response => {
      dataEntriesDailys = response.data;
    })
    .catch(error => {
      console.warn(error);
    });
  return await {dataEntriesDailys};
}

export async function getDaily(id) {
  let dataDailys;
  await urlDefaultDailys
    .get(`/${id}`)
    .then(response => {
      dataDailys = response.data;
    })
    .catch(error => {
      console.warn(error);
    });
  return await {dataDailys};
}

export async function addNewDaily(newUser) {
  await urlDefaultDailys
    .post('', newUser)
    .then()
    .catch(error => console.warn(error));
}

export async function updateDaily(daily, id) {
  await urlDefaultDailys
    .put(`/${id}`, daily)
    .then()
    .catch(error => console.warn(error));
}

export function deleteDaily(...id) {
  if (id.length > 1) {
    id.map(itemId =>
      urlDefaultDailys
        .delete(`/${itemId}`)
        .then()
        .catch(error => console.warn(error)),
    );
  } else {
    urlDefaultDailys
      .delete(`/${id}`)
      .then()
      .catch(error => console.warn(error));
  }
}
