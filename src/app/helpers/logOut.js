import Cookie from 'js-cookie';
import {browserHistory} from 'react-router';

export default function logOut() {
  Cookie.remove('token');
  browserHistory.push('/');
}
