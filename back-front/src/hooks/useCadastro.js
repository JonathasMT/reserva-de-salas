import {useContext} from 'react';
import {CadastroContext} from '../contexts/CadastroProvider';

const useCadastro = () => {
  const context = useContext(CadastroContext);
  console.log('Passou no arquivo useCadastro.js');
  return context;
};

export default useCadastro;
