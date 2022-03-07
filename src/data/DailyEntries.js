import axios from 'axios';

const urlDefaultDailys = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
});

export async function getEntriesDailys() {
  try {
    return await (
      await urlDefaultDailys.get('?username=maicon')
    ).data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getDaily(id) {
  try {
    return await (
      await urlDefaultDailys.get(`/${id}`)
    ).data;
  } catch (error) {
    console.warn(error);
  }
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
