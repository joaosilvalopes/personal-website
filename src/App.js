import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import colors from './colors';
import Header from './Header';
import LeftCol from './LeftCol';
import RightCol from './RightCol';

import medias from './medias';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  background: ${colors.oiledIron};
  min-height: 100%;
  padding: 0 4rem;
  padding-bottom: 4rem;

  ${medias.leS} {
    padding: 0 2rem;
    flex-direction: column;
  }
`;

function App() {
  return <>
    <CssBaseline />
    <Header />
    <Main>
      <LeftCol />
      <RightCol />
    </Main>
  </>;
}

export default App;
