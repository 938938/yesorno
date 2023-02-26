import axios from 'axios';

const URL = `https://yesno.wtf/api`

export const getDataAPI = () => {
  try {
    const data = axios.get(`${URL}`).then((res) => res.data);
    return data;
  } catch (e) {
    return e;
  }
};
