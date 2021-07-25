import axios from 'axios';
import config from '../../config.json';

export const instance = axios.create({
  baseURL: config.api,
});

export default instance;
