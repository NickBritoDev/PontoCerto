import { loadData, saveData } from '../../utils/dataUtil.js';
import { v4 as uuidv4 } from 'uuid';

export const createUserService = async (user) => {
  try {
    if (!user || !user.firstName || !user.lastName || !user.age) {
      throw new Error('Missing required user information.');
    }

    const users = await loadData();


    const userWithId = { ...user, id: uuidv4() };
    users.push(userWithId);

    await saveData(users);

    return users;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Internal Server Error');
  }
};
