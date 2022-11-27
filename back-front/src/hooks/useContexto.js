import {useContext} from 'react';
import {Contexto} from '../contexts/ContextoProvider';

const useContexto = () => {
  const context = useContext(Contexto);
  console.log('Passou no arquivo useContexto.js');
  return context;
};

export default useContexto;
