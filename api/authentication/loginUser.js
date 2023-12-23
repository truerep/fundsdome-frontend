import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
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