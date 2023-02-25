import styled from '@emotion/styled';
import Main from './components/Main';

const Wrapper = styled.div`
  background-color: #c49f9f;
  height: 100vh;
  width: 100vw;
  display: flex;

  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Wrapper>
      <Main></Main>
    </Wrapper>
  );
}

export default Home;
