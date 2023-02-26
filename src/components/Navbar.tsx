import styled from '@emotion/styled';
import plusImg from '../assets/images/icons/plus.png';
import searchImg from '../assets/images/icons/search.png';
import userImg from '../assets/images/icons/user.png';
import homeImg from '../assets/images/icons/home.png';
import checkImg from '../assets/images/icons/checkImg.png';
import trophyImg from '../assets/images/icons/trophy.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const location = useLocation();
  const [isWritePage, setIsWritePage] = useState(false);

  useEffect(() => {
    location.pathname == '/write-page'
      ? setIsWritePage(true)
      : setIsWritePage(false);
  }, [location]);

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
          {isWritePage ? (
            <Link to={'/'}>
              <img src={checkImg}></img>
            </Link>
          ) : (
            <Link to={'/write-page'}>
              <img src={plusImg}></img>
            </Link>
          )}
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
