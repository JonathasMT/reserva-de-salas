import React from 'react';

import { Container} from './AppStyle';
import GlobalStyle from '../src/styles/globalStyle';
import RoutesApp from './routes';

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <RoutesApp/>
    </Container>
  );
}

export default App;
