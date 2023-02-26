import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useDidUnMountEffect } from '../../../utils/tools';
import Content from './Content';
import VoteSection from './VoteSection';

function Slide() {
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [leftButtonCustom, setLeftButtonCustom] = useState('');
  const [rightButtonCustom, setRightButtonCustom] = useState('');
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    console.log(title);
  }, [title]);

  useDidUnMountEffect(() => {
    console.log('저장할 값:');
  }, []);

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

export default Slide;

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
