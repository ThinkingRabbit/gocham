import styled from '@emotion/styled';
import Headers from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Slide from './Slide';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 790px;
`;

function Main() {
  return (
    <Wrapper>
      <Headers />
      <Slide />
      <Navbar />
    </Wrapper>
  );
}

export default Main;
