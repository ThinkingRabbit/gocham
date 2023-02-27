import styled from '@emotion/styled';
import WritePage from './WritePage';
import Headers from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { newWriteTitle } from '../../../states/newWriteState';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 790px;
`;

function Main() {
  // const names = useRecoilValue(newWriteTitle);

  // const [onSave, setOnSave] = useState(false);
  // useEffect(() => {
  //   return () => {
  //     if (true) {
  //       console.log(names);
  //     }
  //   };
  // }, []);

  return (
    <Wrapper>
      <Headers />
      <WritePage />
      <Navbar />
    </Wrapper>
  );
}

export default Main;
