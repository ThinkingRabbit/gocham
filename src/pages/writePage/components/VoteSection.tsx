import React, { useState } from 'react';
import styled from '@emotion/styled';

const VoteSection = () => {
  const [isCustomButtonVisible, setIsCustomButtonVisible] = useState(false);

  return (
    <>
      <CustomTextButton
        onClick={() => {
          setIsCustomButtonVisible(!isCustomButtonVisible);
          console.log(isCustomButtonVisible);
        }}
      >
        <p>+ 버튼 커스텀 하기</p>
      </CustomTextButton>
      {isCustomButtonVisible ? (
        <>
          아래의 찬성 반대 위에 여러분들이 작성해보세요!
          <br />
          <br />
          <VoteSectionWrap>
            <Button maxLength={10} placeholder='찬성' />
            <Button maxLength={10} placeholder='반대' />
          </VoteSectionWrap>
        </>
      ) : null}
    </>
  );
};

export default VoteSection;

const CustomTextButton = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
  color: #005666;
`;

const VoteSectionWrap = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  height: 58px;
  margin: 0 1em 3em 1em;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

const Button = styled.input`
  padding-left: 1.3rem;
  font-size: 33px;
  font-weight: 700;
  border: 0;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  &:first-child {
    border-right: 0.5px solid black;
    border-radius: 2em 0 0 2em;
  }
  &:last-child {
    border-left: 0.5px solid black;
    border-radius: 0 2em 2em 0;
  }
`;
