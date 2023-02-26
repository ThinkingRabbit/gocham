import styled from '@emotion/styled';
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
  background-color: #ededed;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
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
          <img alt="메뉴1" src={trophyImg} />
        </Menu>
        <Menu>
          <img alt="메뉴2" src={homeImg} />
        </Menu>
        <Plus>
          <img alt="메뉴3" src={plusImg} />
        </Plus>
        <Menu>
          <img alt="" src={searchImg} />
        </Menu>
        <Menu>
          <img alt="" src={userImg} />
        </Menu>
      </MenuList>
    </NavigationBar>
  );
}

export default Navbar;
