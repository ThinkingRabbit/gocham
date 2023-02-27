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
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/error/Error';

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts/:id" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write-page" element={<WritePage />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/detail-page/:postId" element={<DetailPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
