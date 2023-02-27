import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <StWrapper>
      <StMyPage>
        준비중인 페이지입니다
        <StBack
          onClick={() => {
            navigate(-1);
          }}
        >
          돌아가기
        </StBack>
      </StMyPage>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #5783fc;
`;

const StMyPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  height: 790px;
  background: white;
`;

const StBack = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #5783fc;
  color: white;
`;

export default MyPage;
