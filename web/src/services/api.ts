import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';

const api = axios.create({ baseURL: URL, });

export default api;