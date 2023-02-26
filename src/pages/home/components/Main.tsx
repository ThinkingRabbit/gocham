import styled from '@emotion/styled';
import Headers from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Slide from './Slide';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 470px;
  height: 88vh;
`;

const Top = styled.div`
  background-color: wheat;
  height: 60px;
  width: 100%;
`;

const Navigation = styled.div`
  background-color: wheat;
  height: 60px;
  width: 100%;
`;

function Main() {
  return (
    <Wrapper>
      <Headers></Headers>
      <Slide></Slide>
      <Navbar></Navbar>
    </Wrapper>
  );
}

export default Main;
