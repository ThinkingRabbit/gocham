import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  newWriteContent,
  newWriteFiles,
  newWriteRightButtonCustom,
  newWriteSave,
  newWriteTitle,
  newWritLeftButtonCustom,
} from '../../../states/newWriteState';
import { useDidUnMountEffect } from '../../../utils/tools';
import Content from './Content';
import VoteSection from './VoteSection';

function WritePage() {
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

  return (
    <Wrapper>
      <Content
        title={title}
        setTitle={setTitle}
        contents={contents}
        setContents={setContents}
        files={files}
        setFiles={setFiles}
      />
      <VoteSection
        leftButtonCustom={leftButtonCustom}
        setLeftButtonCustom={setLeftButtonCustom}
        rightButtonCustom={rightButtonCustom}
        setRightButtonCustom={setRightButtonCustom}
      />
    </Wrapper>
  );
}

export default WritePage;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 90vh;
  min-height: 500px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
