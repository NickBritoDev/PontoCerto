import React from 'react';
import { Button } from '@chakra-ui/react';
import { login } from '../../auth/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    const token = 'token_gerado_pelo_servidor';
    login(token);
    navigate('/ponto-certo/home');
  };

  return <Button onClick={handleLogin}>Logar</Button>;
}