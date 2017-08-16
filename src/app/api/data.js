import axios from 'axios';

import {api} from './../../env.js';

export function getListings() {
  console.log(api, 'api');
  return axios.get(`${api}/listings`).then(resp => {
    console.log(resp);
  });
}
