import Cookie from 'js-cookie';
import {browserHistory} from 'react-router';

export default function hasSession() {
  if (Cookie.get('token')) {
    return browserHistory.push('/dashboard');
  } 
}