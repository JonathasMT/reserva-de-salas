import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container} from './AppStyle';

import Home from './pages/Home';
import Login from './pages/Login';
import MyBookings from './pages/MyBookings';
import Configs from './pages/Config';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mybookings' element={<MyBookings/>}/>
          <Route path='/configs' element={<Configs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
