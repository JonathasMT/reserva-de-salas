import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Config';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/minhasreservas' element={<MinhasReservas/>}/>
        <Route path='/configuracoes' element={<Configuracoes/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
