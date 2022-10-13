import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalendarMonth from './components/CalendarMonth';

import Home from './pages/Home';
import Login from './pages/Login';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Config';

function App() {
  return (
    <Router>
      <Header/>
      <CalendarMonth/>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/minhasreservas' element={<MinhasReservas/>}/>
        <Route path='/configuracoes' element={<Configuracoes/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> */}
    </Router>
  );
}

export default App;
