import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './components/Main';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #c49f9f;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  let newId = +id!;
  const [scroll, setScroll] = useState(false);

  const change = () => {
    setScroll(false);
    navigate(`/shorts/${newId}`);
  };

  useEffect(() => {
    window.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScroll(true);
        newId++;
        return change();
      } else if (event.deltaY < 0) {
        setScroll(true);
        newId--;
        return change();
      }
    });
  }, [scroll]);

  return (
    <Wrapper>
      <Main></Main>
    </Wrapper>
  );
}

export default Home;
