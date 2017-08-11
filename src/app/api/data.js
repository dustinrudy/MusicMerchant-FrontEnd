import axios from 'axios';

import api from '../../env.js';

export function getListings() {
  return axios.get(`${api}/listings`).then(resp => {
    console.log(resp);
  });
}
