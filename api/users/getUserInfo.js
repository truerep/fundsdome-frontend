import axios from 'axios';

import { appEnv } from '@/helpers';

const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${appEnv.apiUrl}/users/user-info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    // console.error('Failed to fetch data', error);
    // throw error;
  }
}

export default getUserInfo;