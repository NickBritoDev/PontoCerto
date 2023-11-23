import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../layout/public/pages/login/index';
import Logout from '../layout/public/pages/logout/index';
import Home from '../layout/admin/Home';
import { isAuthenticated } from '../layout/public/auth/authService';

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
        <Route path="/public/login" element={<Login />} />
        <Route path="/public/logout" element={<Logout />} />
        <Route path="/ponto-certo/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
