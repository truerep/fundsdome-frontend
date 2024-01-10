import axios from 'axios';

import { appEnv } from '@/helpers';

const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${appEnv.apiUrl}/users/login`, {
      username,
      password,
    });

    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Authentication failed', error);
    throw error;
  }
};

export default loginUser;