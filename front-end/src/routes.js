import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../src/hooks/useAuth";

import Home from './pages/Home';
import Login from './pages/Login';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Config';
import Header from "./components/Header";

const Privada = ({ Item }) => {
  const { logado } = useAuth();
  console.log('USEAUTH >> '+ logado);
  return logado ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Routes>
            <Route path='/' element={<Privada Item={Home} />}/>
            <Route path='/minhasreservas' element={<Privada Item={MinhasReservas} />}/>
            <Route path='/configuracoes' element={<Privada Item={Configuracoes} />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Login />} />

            {/* <Route path='/' element={<Home/>}/>
            <Route path='/minhasreservas' element={<MinhasReservas/>}/>
            <Route path='/configuracoes' element={<Configuracoes/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Login />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;