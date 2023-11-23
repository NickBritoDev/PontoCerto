import { editUserService } from '../../services/users/EditUserByIdService.js';

export const editUser = async (req, res) => {
  const { id } = req.params;
  const updatedUserData = req.body;
  try {
    const resultMessage = await editUserService(id, updatedUserData);
    res.send(resultMessage);
  } catch (error) {
    console.error('Error editing user:', error);
    res.status(500).send('Internal Server Error');
  }
};
