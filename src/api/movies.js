import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/4/',

  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});
