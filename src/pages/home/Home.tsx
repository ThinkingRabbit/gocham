import styled from '@emotion/styled';

import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { testData } from '../../states/testData';

import Main from './components/Main';
import RandomGenerator from './utils/random';

const Wrapper = styled.div`
  background-color: #c49f9f;
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const navigate = useNavigate();
  const scroll = useRef(false);
  const index = useRef(0);
  const dataIds = useRef<number[]>([]);
  const { id } = useParams();
  const [inputData, setInputData] = useRecoilState(testData);
  useEffect(() => {
    dataIds.current = RandomGenerator.run(inputData);

    if (!id) {
      return navigate(`/shorts/${dataIds.current[0]}`);
    }
  }, [inputData]);

  const downChange = () => {
    if (dataIds.current.length - 1 > index.current && scroll.current) {
      index.current += 1;
      navigate(`/shorts/${dataIds.current[index.current]}`);
      scroll.current = false;
    }
  };

  const upChange = () => {
    if (index.current > 0 && scroll.current) {
      index.current -= 1;
      navigate(`/shorts/${dataIds.current[index.current]}`);
      scroll.current = false;
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY > 0) {
        return downChange();
      }
      if (event.deltaY < 0) {
        return upChange();
      }
    });
  }, [scroll.current]);

  const onWheel = () => {
    scroll.current = true;
  };

  return (
    <Wrapper onWheel={onWheel}>
      <Main />
    </Wrapper>
  );
}

export default Home;
