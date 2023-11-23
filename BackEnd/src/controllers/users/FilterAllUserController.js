import { getAllUsersService } from '../../services/users/FilterAllUserService.js';

export const filterAllUser = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.send(users);
  } catch (error) {
    console.error('Error retrieving all users:', error);
    res.status(500).send('Internal Server Error');
  }
};