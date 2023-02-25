import Home from './pages/home/Home';
import WritePage from './pages/writePage/index';
import { Global } from '@emotion/react';
import { reset } from './reset';
import { Route, Routes } from 'react-router-dom';
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <>
      <Global styles={reset}></Global>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/write-page' element={<WritePage />} />
        <Route path='/detail-page' element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
