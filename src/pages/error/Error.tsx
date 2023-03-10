import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import '../../assets/fonts/fonts.css';

const lower = keyframes`
    0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% { 
    opacity:0.4; text-shadow: none; 
  }
`;

const upper = keyframes`
    0%,19.999%,22%,62.999%,64%, 64.999%,70%,100% {
    opacity:.99; text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
  }
  20%,21.999%,63%,63.999%,65%,69.999% {
    opacity:0.4; text-shadow: none; 
  }
`;

const Wrapper = styled.div`
  background-color: #5783fc;
  height: 100vh;
  padding: 150px;
  font-size: 75px;
  font-family: 'Monoton', cursive;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed;
  color: red;
`;

const Err = styled.p`
  margin: 0;
  color: #fff;
  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;
  span {
    animation: ${upper} 11s linear infinite;
  }
`;

const Code = styled.p`
  margin: 0;
  span:nth-of-type(2) {
    animation: ${lower} 10s linear infinite;
  }
  span:nth-of-type(1) {
    text-shadow: none;
    opacity: 0.4;
  }
`;

function Error() {
  return (
    <Wrapper>
      <Err>
        E<span>R</span>ROR
      </Err>
      <Code>
        4<span>0</span>
        <span>4</span>
      </Code>
    </Wrapper>
  );
}

export default Error;
