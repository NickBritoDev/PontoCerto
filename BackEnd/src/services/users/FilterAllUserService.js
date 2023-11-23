import { loadData } from '../../utils/dataUtil.js';

export const getAllUsersService = async () => {
  try {
    const users = await loadData();
    return users;
  } catch (error) {
    console.error('Error retrieving all users:', error);
    throw new Error('Internal Server Error');
  }
};
