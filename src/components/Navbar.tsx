import styled from '@emotion/styled';
import plusImg from '../assets/images/icons/plus.png';
import searchImg from '../assets/images/icons/search.png';
import userImg from '../assets/images/icons/user.png';
import homeImg from '../assets/images/icons/home.png';
import checkImg from '../assets/images/icons/checkImg.png';
import trophyImg from '../assets/images/icons/trophy.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { lastIdx, testData } from '../states/testData';
import { SlideData } from '../pages/home/type';

const NavigationBar = styled.div``;

const MenuList = styled.ul`
  padding: 0 5px 0 15px;
  display: flex;
  background-color: #ededed;
  gap: 70px;
  flex-direction: row;
  height: 100%;
`;

const Menu = styled.li`
  margin: auto 0;
  cursor: pointer;

  width: 5px;
  height: 38px;
`;

const Plus = styled.li`
  position: relative;
  width: 0px;
  height: 69px;
  z-index: 10;
  transform: translateY(-20px);
  cursor: pointer;
  padding: 0 35px 0 1px;
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
  const [idx, setIdx] = useRecoilState(lastIdx);
  const navigation = useNavigate();

  const goMainButton = () => {
    if (title !== '' && contents !== '') navigation(`/shorts/${idx}`);
    else alert('내용을 채운 후 클릭해주세요!');
  };

  useEffect(() => {
    location.pathname === '/write-page'
      ? setIsWritePage(true)
      : setIsWritePage(false);

    if (title !== '') {
      const leftValue = leftButtonCustom ? leftButtonCustom : '찬성';
      const rightValue = rightButtonCustom ? rightButtonCustom : '반대';
      const saveData: SlideData = {
        poster_path: files,
        text: contents,
        posting_date: '2022-02-27',
        id: idx,
        vote: {
          vote_text: [leftValue, rightValue],
          vote_count: 0,
          vote_case_left: 0,
          vote_case_right: 0,
          vote_click: false,
        },
        like: 0,
      };
      setIdx(value => value + 1);
      setInputData({
        result: [...inputData.result, saveData],
      });

      setTitle('');
      setContents('');
      setLeftButtonCustom('');
      setRightButtonCustom('');
      setFiles('');
    }
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
            <img src={checkImg} onClick={() => goMainButton()} alt="" />
          ) : (
            <Link to="/write-page">
              <img alt="img" src={plusImg} />
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
