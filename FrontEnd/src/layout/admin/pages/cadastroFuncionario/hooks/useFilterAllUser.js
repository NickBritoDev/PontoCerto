import { useQuery } from 'react-query';
import api from '../../../../../service/api.js';

const useFilterAllUser = () => {
  return useQuery(
    ['useGetuseFilterAllUser'],
    async () => {
      const response = await api.get('/users');
      return response.data
    },
    {
      refetchInterval: 2500,
      refetchOnWindowFocus: false,
      staleTime: 1000,
    },
  )
};

export { useFilterAllUser };
