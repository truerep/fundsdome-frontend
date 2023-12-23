import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/users/user-info`, {
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