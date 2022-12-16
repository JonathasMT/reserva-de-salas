import {useContext} from 'react';
import {Contexto} from '../contexts/ContextoProvider';

const useContexto = () => {
  const context = useContext(Contexto);
  return context;
};

export default useContexto;
