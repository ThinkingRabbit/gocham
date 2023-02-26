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
import DetailPage from './pages/detailPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts/:id" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write-page" element={<WritePage />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/detail-page/:postId" element={<DetailPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
