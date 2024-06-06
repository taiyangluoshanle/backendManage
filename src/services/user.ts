import axios from "axios";

const BASE_URL = "/api/users";

export const ADD_USER = (user: any) =>
  axios.post(BASE_URL, user).then((response) => response.data);

export const GET_USER = () =>
  axios.get(BASE_URL).then((response) => response.data);
