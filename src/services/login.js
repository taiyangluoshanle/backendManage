import axios from 'axios'
const BASE_URL = '/api/login'
export const LOGIN_SERVER = (user) =>
  axios.post(BASE_URL, user).then((response) => response.data)
