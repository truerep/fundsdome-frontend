import axios from 'axios';

import { appEnv } from '@/helpers';

const getLatestGroupPost = async (groupId) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/posts/group/${groupId}/1/1`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getLatestGroupPost;