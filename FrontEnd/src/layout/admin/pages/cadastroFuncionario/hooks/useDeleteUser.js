import { useMutation } from 'react-query';
import api from '../../../../../service/api.js';

const useDeleteUser = () => {
  const deleteUser = async (payload) => {
    try {
      const response = await api.delete(`/users/${payload}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const mutation = useMutation(deleteUser);

  return {
    deleteUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  };
};

export { useDeleteUser };
