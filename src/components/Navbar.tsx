import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import plusImg from '../assets/images/icons/plus.png';
import searchImg from '../assets/images/icons/search.png';
import userImg from '../assets/images/icons/user.png';
import homeImg from '../assets/images/icons/home.png';
import trophyImg from '../assets/images/icons/trophy.png';

const NavigationBar = styled.div`
  margin: 0 10px 0 10px;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  liststyle: none;
  height: 100%;
`;

const Menu = styled.li`
  margin: auto 0;
  cursor: pointer;
  padding: 0 25px 0 25px;
  width: 40px;
  height: 38px;
`;

const Plus = styled.li`
  position: relative;
  margin: auto 0;
  width: 69px;
  height: 69px;
  z-index: 10;
  transform: translateY(-20px);
  cursor: pointer;
  padding: 0 20px 0 20px;
`;

function Navbar() {
  return (
    <NavigationBar>
      <MenuList>
        <Menu>
          <img src={trophyImg}></img>
        </Menu>
        <Menu>
          <Link to={'/'}>
            <img src={homeImg}></img>
          </Link>
        </Menu>
        <Plus>
          <Link to={'/write-page'}>
            <img src={plusImg}></img>
          </Link>
        </Plus>
        <Menu>
          <img src={searchImg}></img>
        </Menu>
        <Menu>
          <img src={userImg}></img>
        </Menu>
      </MenuList>
    </NavigationBar>
  );
}

export default Navbar;
