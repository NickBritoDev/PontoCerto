import { getUserByIdService } from '../../services/users/FilterUserByIdService.js';

export const filterUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await getUserByIdService(id);
    res.send(foundUser);
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};
