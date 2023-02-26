import styled from '@emotion/styled';
import logoImg from '../assets/images/logo.png';

const Logo = styled.div`
  height: 50px;
  width: 143px;
  margin: 0 auto;
  padding: 5px 0;
`;

function Header() {
  return (
    <Logo>
      <img src={logoImg} style={{ width: '143px', height: '50px' }}></img>
    </Logo>
  );
}
export default Header;
