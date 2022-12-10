import React from 'react';

import GlobalStyle from '../src/assets/styles/globalStyle';
import RoutesApp from './routes';
import {ContextoProvider} from './contexts/ContextoProvider';

function App() {
  return (
    <ContextoProvider>
        <GlobalStyle/>
        <RoutesApp/>
    </ContextoProvider>
  );
}

export default App;
