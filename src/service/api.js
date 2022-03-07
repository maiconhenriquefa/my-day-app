import axios from 'axios';

const urlDefault = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/',
});

export async function getEntriesDailys() {
  try {
    const {data} = urlDefault.get('daily_entries?username=maicon');
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getDaily(id) {
  try {
    const {data} = urlDefault.get(`daily_entries/${id}`);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getActivities() {
  try {
    const {data} = await urlDefault.get('activities');
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addNewDaily(newUser) {
  try {
    const {data} = urlDefault.post('daily_entries', newUser);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function updateDaily(daily, id) {
  try {
    const {data} = urlDefault.put(`daily_entries/${id}`, daily);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export function deleteDaily(...id) {
  if (id.length > 1) {
    id.map(itemId =>
      urlDefault
        .delete(`daily_entries/${itemId}`)
        .then()
        .catch(error => console.warn(error)),
    );
  } else {
    urlDefault
      .delete(`daily_entries/${id}`)
      .then()
      .catch(error => console.warn(error));
  }
}

export default urlDefault;
