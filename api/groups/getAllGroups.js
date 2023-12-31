import axios from 'axios';

import { appEnv } from '@/helpers';

const getAllGroups = async (pageNum = 1) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/conversation/all/${pageNum}`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getAllGroups;