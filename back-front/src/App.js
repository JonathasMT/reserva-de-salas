import React from 'react';

import GlobalStyle from '../src/styles/globalStyle';
import RoutesApp from './routes';
import {AuthProvider} from './contexts/AuthProvider';
import { CadastroProvider } from './contexts/CadastroProvider';

function App() {
  return (
    <AuthProvider>
        <CadastroProvider>
            <GlobalStyle/>
            <RoutesApp/>
        </CadastroProvider>
    </AuthProvider>
  );
}

export default App;
