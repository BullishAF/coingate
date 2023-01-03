import axios from 'axios';

import envs from './envs';

const api = axios.create({
  baseURL: envs.coinGeckoApiBaseUrl
});

export default api;
