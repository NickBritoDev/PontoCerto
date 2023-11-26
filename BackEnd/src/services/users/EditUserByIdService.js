import { loadData, saveData } from '../../utils/dataUtil.js';

export const editUserService = async (userId, updatedUserData) => {
  try {
    let users = await loadData();

    // Verifica se o usuário com o ID fornecido existe
    const userToUpdate = users.find((user) => user.id === userId);
    if (!userToUpdate) {
      throw new Error(`User with id ${userId} not found.`);
    }

    // Atualiza os dados do usuário, se fornecidos
    if (updatedUserData.primeiroNome) userToUpdate.primeiroNome = updatedUserData.primeiroNome;
    if (updatedUserData.sobrenome) userToUpdate.sobrenome = updatedUserData.sobrenome;
    if (updatedUserData.idade) userToUpdate.idade = updatedUserData.idade;

    // Salva os usuários atualizados
    await saveData(users);

    return 'User successfully updated';
  } catch (error) {
    console.error('Error editing user:', error);
    throw new Error('Internal Server Error');
  }
};
