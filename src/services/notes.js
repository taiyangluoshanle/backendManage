import axios from 'axios'

const BASE_URL = '/api/notes'
let token = null
export const setToken = (newToken) => {
  token = `bearer ${newToken}`
}
export const GET_ALL_NOTES = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const ADD_NOTE = async (note) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(BASE_URL, note, config)
  return response.data
}

export const UPDATE_NOTE = (note) =>
  axios.put(`${BASE_URL}/${note.id}`, note).then((response) => response.data)
