import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './components/Main';
import RandomGenerator from './utils/random';

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
  const [scroll, setScroll] = useState(false);
  const index = useRef(0);
  const test = useRef<number[]>([]);

  useEffect(() => {
    test.current = RandomGenerator.run();
    navigate(`/shorts/${test.current[0]}`);
  }, []);

  const downChange = () => {
    setScroll(false);
    if (test.current.length - 1 > index.current) {
      index.current += 1;
      navigate(`/shorts/${test.current[index.current]}`);
    }
  };

  const upChange = () => {
    setScroll(false);
    if (index.current > 0) {
      index.current -= 1;
      navigate(`/shorts/${test.current[index.current]}`);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScroll(true);
        return downChange();
      } else if (event.deltaY < 0) {
        setScroll(true);
        return upChange();
      }
    });
  }, [scroll]);

  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default Home;
