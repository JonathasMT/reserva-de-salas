import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../src/hooks/useAuth';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Config';
import Perfil from './pages/Perfil';

const Privada = ({ Destino }) => {
  const { logado } = useAuth();
  console.log('routes.js >> Logado? >> '+ logado);
  return logado ? <Destino /> : <Login />;
};

const RoutesApp = () => {
  console.log('Passou no arquivo routs.js');
  return (
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Routes>
            <Route path='/' element={<Privada Destino={Home} />}/>
            <Route path='/minhasreservas' element={<Privada Destino={MinhasReservas} />}/>
            <Route path='/configuracoes' element={<Privada Destino={Configuracoes} />}/>
            <Route path='/perfil' element={<Privada Destino={Perfil} />}/>
            <Route path='*' element={<Login />} />

            {/* <Route path='/' element={<Home/>}/>
            <Route path='/minhasreservas' element={<MinhasReservas/>}/>
            <Route path='/configuracoes' element={<Configuracoes/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Login />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;