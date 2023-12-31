import axios from 'axios';

import { appEnv } from '@/helpers';

const getAllEvents = async () => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/events/all/1`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getAllEvents;