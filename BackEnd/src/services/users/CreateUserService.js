// services/userService.js

import { loadData, saveData } from '../../utils/dataUtil.js';
import { v4 as uuidv4 } from 'uuid';

export const createUserService = async (user) => {
  try {
    if (!user || !user.primeiroNome || !user.sobrenome || !user.idade || !user.email) {
      throw new Error('Missing required user information.');
    }

    const users = await loadData();

    const existingUser = users.find((existingUser) => existingUser.email === user.email);
    if (existingUser) {
      throw new Error('User with the same email already exists.');
    }

    const userWithId = { ...user, id: uuidv4() };
    users.push(userWithId);

    await saveData(users);

    return users;
  } catch (error) {
    console.error('Error creating user:', error.message); 
    throw error.message; 
  }
};
