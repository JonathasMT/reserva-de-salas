import {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import useAuth from '../src/hooks/useAuth';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Configuracoes';
import Perfil from './pages/Perfil';
import NotFound from './pages/NotFound';
import NovoUsuario from './pages/NovoUsuario';
import NovoGrupo from './pages/NovoGrupo';
import NovaSala from './pages/NovaSala';
import NovaCategoria from './pages/NovaCategoria';
import NovaReserva from './pages/NovaReserva';
import Usuarios from './pages/Usuarios';
import EditarReserva from './pages/EditarReserva';
import DetalhesReserva from './pages/DetalhesReserva';
import PrimeiroAcesso from './pages/PrimeiroAcesso';


// eslint-disable-next-line
const Privada = ({Destino}) => {
  const {autenticado} = useAuth();
  console.log('routes.js >> Autenticado? >> '+ autenticado);
  return autenticado ? <Destino /> : <Login />;
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
            <Route path='/novousuario' element={<Privada Destino={NovoUsuario} />}/>
            <Route path='/novogrupo' element={<Privada Destino={NovoGrupo} />}/>
            <Route path='/novasala' element={<Privada Destino={NovaSala} />}/>
            <Route path='/novacategoria' element={<Privada Destino={NovaCategoria} />}/>
            <Route path='/novareserva' element={<Privada Destino={NovaReserva} />}/>
            <Route path='/editarreserva' element={<Privada Destino={EditarReserva} />}/>
            <Route path='/detalhesreserva' element={<Privada Destino={DetalhesReserva} />}/>
            <Route path='/usuarios' element={<Privada Destino={Usuarios} />}/>
            <Route path='/primeiroacesso' element={<Privada Destino={PrimeiroAcesso} />}/>
            <Route path='*' element={<NotFound />} />

            {/* <Route path='/' element={<Home/>}/>
            <Route path='/minhasreservas' element={<MinhasReservas/>}/>
            <Route path='/configuracoes' element={<Configuracoes/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/novousuario' element={<NovoUsuario/>}/>
            <Route path='/novogrupo' element={<NovoGrupo/>}/>
            <Route path='/novasala' element={<NovaSala/>}/>
            <Route path='/novacategoria' element={<NovaCategoria/>}/>
            <Route path='/novareserva' element={<NovaReserva/>}/>
            <Route path='/editarreserva' element={<EditarReserva/>}/>
            <Route path='/detalhesreserva' element={<DetalhesReserva/>}/>
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/primeiroacesso' element={<PrimeiroAcesso/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;