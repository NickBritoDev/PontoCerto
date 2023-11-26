import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Logout from '../layout/public/pages/logout/index';
import { isAuthenticated } from '../layout/public/auth/authService';
import Register from '../layout/public/pages/regster';
import ConfirmEmail from '../layout/public/pages/confirmEmail';

const PrivateRoute = ({ element, ...props }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/public/login" replace state={{ from: props.location }} />
  );
};

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public/login" element={<Register />} />
        <Route path="/public/logout" element={<Logout />} />
        <Route path="/ponto-certo/home" element={<PrivateRoute element={<ConfirmEmail />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
