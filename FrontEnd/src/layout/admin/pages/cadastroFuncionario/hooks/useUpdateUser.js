import { useMutation } from 'react-query';
import api from '../../../../../service/api.js';

const useUpdateUser = () => {
  const updateUser = async (payload) => {

    try {
      const response = await api.patch(`/users/${payload.id}`, {
        primeiroNome: payload.primeiroNome,
        sobrenome: payload.sobrenome,
        idade: payload.idade,
        email: payload.email,
        salario: payload.salario,
        cargo: payload.cargo
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const mutation = useMutation(updateUser);

  const UseRequestUpdateUser = async (payload) => {
    try {
      await mutation.mutateAsync(payload);
    } catch (error) {
      throw error;
    }
  };

  return {
    UseRequestUpdateUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  };
};

export { useUpdateUser };
