import React from 'react';

import GlobalStyle from '../src/styles/globalStyle';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
        <GlobalStyle/>
        <RoutesApp/>
    </AuthProvider>
  );
}

export default App;
