import { loadData, saveData } from '../../utils/dataUtil.js';

export const deleteUserService = async (userId) => {
  try {
    let users = await loadData();

    // Verifica se o usuário com o ID fornecido existe
    const userToDelete = users.find((user) => user.id === userId);
    if (!userToDelete) {
      throw new Error(`User with id ${userId} not found.`);
    }

    // Filtra os usuários, removendo o usuário com o ID fornecido
    users = users.filter((user) => user.id !== userId);

    // Salva os usuários atualizados
    await saveData(users);

    return `User with the id: ${userId} deleted from the database.`;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Internal Server Error');
  }
};