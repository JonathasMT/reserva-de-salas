import {useContext} from 'react';
import {AuthContext} from '../contexts/auth';

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('Passou no arquivo useAuth.js');
  return context;
};

export default useAuth;