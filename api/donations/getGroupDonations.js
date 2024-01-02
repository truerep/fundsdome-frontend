import axios from 'axios';

import { appEnv } from '@/helpers';

const getGroupDonations = async (groupId) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/donations/group/${groupId}`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}
export default getGroupDonations;