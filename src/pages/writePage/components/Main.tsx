import styled from '@emotion/styled';
import WritePage from './WritePage';
import Headers from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { useEffect } from 'react';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 470px;
  height: 88vh;
`;

function Main() {
  return (
    <Wrapper>
      <Headers />
      <WritePage />
      <Navbar />
    </Wrapper>
  );
}

export default Main;
