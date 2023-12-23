import axios from 'axios';

import { appEnv } from '@/helpers';

const getGroupDetail = async (groupSlug) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/conversation/slug/${groupSlug}`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getGroupDetail;