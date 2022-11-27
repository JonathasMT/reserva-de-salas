import React from 'react';

import GlobalStyle from '../src/styles/globalStyle';
import RoutesApp from './routes';
import {AuthProvider} from './contexts/AuthProvider';
import {ContextoProvider} from './contexts/ContextoProvider';

function App() {
  return (
    <AuthProvider>
        <ContextoProvider>
            <GlobalStyle/>
            <RoutesApp/>
        </ContextoProvider>
    </AuthProvider>
  );
}

export default App;
