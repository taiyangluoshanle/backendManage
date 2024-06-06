import axios from 'axios'

export const GET_ALL_BLOGS = () =>
  axios.get('/api/blogs').then((response) => response.data)

export const ADD_BLOG = (blog) =>
  axios.post('/api/blogs', blog).then((response) => response.data)
