import Home from './pages/home/Home';
import { Global } from '@emotion/react';
import { reset } from './reset';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Global styles={reset}></Global>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shorts/:id' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
