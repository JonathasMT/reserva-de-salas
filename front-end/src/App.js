import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MinhasReservas from './pages/MinhasReservas';
import Configuracoes from './pages/Configuracoes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
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
