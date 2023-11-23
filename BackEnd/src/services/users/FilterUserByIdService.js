import { loadData } from '../../utils/dataUtil.js';

export const getUserByIdService = async (userId) => {
  try {
    const users = await loadData();
    const foundUser = users.find((user) => user.id === userId);

    if (!foundUser) {
      throw new Error(`User with id ${userId} not found.`);
    }

    return foundUser;
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    throw new Error('Internal Server Error');
  }
};
