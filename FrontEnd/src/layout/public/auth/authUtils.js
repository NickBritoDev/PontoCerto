import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './authService';

export const useAuthentication = () => {
  const navigate = useNavigate();

  const checkAuthentication = () => {
    if (!isAuthenticated()) {
      navigate('/public/login');
    }
  };

  const setupAuthenticationInterval = () => {
    const intervalId = setInterval(checkAuthentication, 1000);
    return () => clearInterval(intervalId);
  };

  return {
    checkAuthentication,
    setupAuthenticationInterval,
  };
};
