import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import Main from './components/Main';

const Wrapper = styled.div`
  background-color: #5783fc;
  height: 100vh;
  width: 100vw;
  display: flex;

  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default Home;
