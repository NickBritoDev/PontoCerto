// controllers/users/DeleteUserByIdController.js

import { deleteUserService } from '../../services/users/DeleteUserByIdService.js';

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const resultMessage = await deleteUserService(id);
    res.send(resultMessage);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
};
