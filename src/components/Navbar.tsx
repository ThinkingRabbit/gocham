import styled from '@emotion/styled';
import plusImg from '../assets/images/icons/plus.png';
import searchImg from '../assets/images/icons/search.png';
import userImg from '../assets/images/icons/user.png';
import homeImg from '../assets/images/icons/home.png';
import checkImg from '../assets/images/icons/checkImg.png';
import trophyImg from '../assets/images/icons/trophy.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  newWriteContent,
  newWriteFiles,
  newWriteRightButtonCustom,
  newWriteSave,
  newWriteTitle,
  newWritLeftButtonCustom,
} from '../states/newWriteState';
import { useRecoilState } from 'recoil';
import { updateData } from '../data/testData';
import { testData } from '../states/testData';
import { Data, SlideData } from '../pages/home/type';

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
  const [isWritePage, setIsWritePage] = useRecoilState(newWriteSave);
  const [title, setTitle] = useRecoilState(newWriteTitle);
  const [contents, setContents] = useRecoilState(newWriteContent);
  const [leftButtonCustom, setLeftButtonCustom] = useRecoilState(
    newWritLeftButtonCustom
  );
  const [rightButtonCustom, setRightButtonCustom] = useRecoilState(
    newWriteRightButtonCustom
  );
  const [files, setFiles] = useRecoilState(newWriteFiles);
  const [inputData, setInputData] = useRecoilState(testData);

  useEffect(() => {
    location.pathname == '/write-page'
      ? setIsWritePage(true)
      : setIsWritePage(false);

    if (title !== '') {
      const leftValue = leftButtonCustom ? leftButtonCustom : '찬성';
      const rightValue = rightButtonCustom ? rightButtonCustom : '반대';
      const saveData: SlideData = {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221376420-ee96140e-170c-4357-996b-9c7fcf9252e0.png',
        text: contents,
        posting_date: '2022-02-27',
        id: 62,
        vote: {
          vote_text: [leftValue, rightValue],
          vote_count: 0,
          vote_case_left: 0,
          vote_case_right: 0,
        },
        like: 0,
      };
      setInputData({
        result: [...inputData.result, saveData],
      });

      console.log(saveData);
      setTitle('');
      setContents('');
      setLeftButtonCustom('');
      setRightButtonCustom('');
      setFiles('');
    }
  }, [location]);

  useEffect(() => {}, [isWritePage]);

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
            <Link to={'/shorts/62'}>
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
