import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalendarMonth from './components/CalendarMonth';
import { Container} from './AppStyle';

import Home from './pages/Home';
import Login from './pages/Login';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Config';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/minhasreservas' element={<MinhasReservas/>}/>
          <Route path='/configuracoes' element={<Configuracoes/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

      </Container>
    </BrowserRouter>
  );
}

export default App;
