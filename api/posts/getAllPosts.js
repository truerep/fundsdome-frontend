import axios from 'axios';

import { appEnv } from '@/helpers';

const getAllPosts = async (pageNum = 1) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/posts/all/${pageNum}/5`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getAllPosts;