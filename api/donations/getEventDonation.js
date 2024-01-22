import axios from 'axios';

import { appEnv } from '@/helpers';

const getEventDonation = async (eventId) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/donations/event/${eventId}`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}
export default getEventDonation;