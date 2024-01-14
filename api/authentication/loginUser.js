import axios from 'axios';
import Cookies from 'universal-cookie';

import { appEnv } from '@/helpers';

const loginUser = async (username, password) => {
  const cookies = new Cookies();
  try {
    const response = await axios.post(`${appEnv.apiUrl}/users/login`, {
      username,
      password,
    });

    const { token } = response.data;
    localStorage.setItem('token', token);
    const setAuthTokenCookie = (token) => {
      cookies.set('auth_token', {token}, { path: '/', domain: 'fundsdome.com' });
    };
  
    setAuthTokenCookie(token);
    const authToken = cookies.get('auth_token', { domain: 'fundsdome.com' });
    console.log(authToken, "<--authToken from cookies")
    return token;
  } catch (error) {
    console.error('Authentication failed', error);
    throw error;
  }
};

export default loginUser;