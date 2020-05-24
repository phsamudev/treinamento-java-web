import React from 'react';

import Routes from './routes';

import { Container, Card } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Container>
        <Card>
          <Routes />
        </Card>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
