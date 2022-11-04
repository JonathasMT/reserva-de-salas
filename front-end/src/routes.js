import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import useAuth from "../hooks/useAuth";

import Home from './pages/Home';
import Login from './pages/Login';
import MyBookings from './pages/MyBookings';
import Configs from './pages/Config';

const Private = ({ Item }) => {
//   const { logged } = useAuth();
  const { logged } = 'useAuth()';

  return logged > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
            <Route path='/' element={<Private Item={Home} />}/>
            <Route path='/mybookings' element={<Private Item={MyBookings} />}/>
            <Route path='/configs' element={<Private Item={Configs} />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Login />} />

            {/* <Route path='/' element={<Home/>}/>
            <Route path='/mybookings' element={<MyBookings/>}/>
            <Route path='/configs' element={<Configs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Login />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;