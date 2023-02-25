import Home from './pages/home/Home';
import { Global } from '@emotion/react';
import { reset } from './reset';

function App() {
  return (
    <>
      <Global styles={reset}></Global>
      <Home></Home>
    </>
  );
}

export default App;
