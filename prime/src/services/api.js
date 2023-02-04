import axios from 'axios';

// base URL
// https://api.themoviedb.org/3/

// KEY's
// movie/now_playing?api_key=e13f91c9180bd48b70c2d12f5e5f56e7&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
