import axios from 'axios';
import Cookies from 'universal-cookie';

import { appEnv } from '@/helpers';

const getUserInfo = async () => {
  const cookies = new Cookies();
  try {
    // const token = localStorage.getItem('token');
    const authToken = cookies.get('auth_token');
    if (authToken?.token) {
      const response = await axios.get(`${appEnv.apiUrl}/users/user-info`, {
        headers: {
          Authorization: `Bearer ${authToken?.token}`,
        },
      });

      return response.data;
    }
  } catch (error) {
    // console.error('Failed to fetch data', error);
    // throw error;
  }
}

export default getUserInfo;