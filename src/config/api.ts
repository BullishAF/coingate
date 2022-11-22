import axios from 'axios';

import envs from './envs';

export const api = axios.create({
  baseURL: envs.coinGeckoApiBaseUrl
});
