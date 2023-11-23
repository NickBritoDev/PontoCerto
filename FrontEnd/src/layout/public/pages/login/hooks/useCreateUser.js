import { useMutation } from 'react-query';
import api from '../../../../../service/api.js';

const useCreateUser = () => {
  const createUser = async (payload) => {
    try {
      const response = await api.post('/users', payload);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
      throw error.message;
    }
  };

  const mutation = useMutation(createUser);

  const UseRequestCreateUser = async (firstName, lastName, age, email) => {
    try {
      await mutation.mutateAsync({
        firstName,
        lastName,
        age,
        email,
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    UseRequestCreateUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  };
};

export { useCreateUser };
