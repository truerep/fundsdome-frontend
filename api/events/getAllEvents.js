import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/all/1`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getAllEvents;