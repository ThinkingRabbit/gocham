import Home from './pages/home/Home';
import WritePage from './pages/writePage/index';
import { Global } from '@emotion/react';
import { reset } from './reset';
import { Route, Routes } from 'react-router-dom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <Global styles={reset}></Global>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shorts/:id" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
