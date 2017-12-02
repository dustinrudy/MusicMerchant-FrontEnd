import axios from 'axios';
import {browserHistory} from 'react-router';
import Cookie from 'js-cookie';

import {api} from './../../env.js';

export function createUser(obj) {
  return axios.post(`${api}/users`, obj).then(resp => {
    console.log(resp);
    Cookie.set('token', resp.data.token);
    browserHistory.push('/dashboard');
  });
}
