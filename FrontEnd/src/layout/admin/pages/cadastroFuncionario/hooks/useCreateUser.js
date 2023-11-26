import { useMutation } from 'react-query';
import api from '../../../../../service/api.js';

const useCreateUser = () => {
  const createUser = async (payload) => {
    try {
      const response = await api.post('/users', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const mutation = useMutation(createUser);

  const UseRequestCreateUser = async (primeiroNome, sobrenome, idade, email, salario, cargo) => {
    try {
      await mutation.mutateAsync({
        primeiroNome,
        sobrenome,
        idade,
        email,
        salario,
        cargo
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
