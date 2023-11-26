import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Logout from '../layout/public/pages/logout/index';
import Register from '../layout/public/pages/regster';
import Home from '../layout/admin/Home'
import ControleFuncionario from '../layout/admin/pages/cadastroFuncionario/index'

//import ConfirmEmail from '../layout/public/pages/confirmEmail';
/*const PrivateRoute = ({ element, ...props }) => {
  return isAuthenticated() ? (element
    element
  ) : (
    <Navigate to="/public/login" replace state={{ from: props.location }} />
  );
};*/

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public/login" element={<Register />} />
        <Route path="/public/logout" element={<Logout />} />
        <Route path="/ponto-certo/home" element={<Home />} />
        <Route path="/ponto-certo/controle-de-funcionarios/gerenciamento" element={<ControleFuncionario />} />

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;