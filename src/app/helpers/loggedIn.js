import Cookie from 'js-cookie';
import {browserHistory} from 'react-router';

export default function loggedIn() {
  if (Cookie.get('token')) {
    return true;
  } else {
    return browserHistory.push('/');
  }
}
