import styled from '@emotion/styled';
import React, { useState } from 'react';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

interface IProps {
  id: string;
  password: string;
}

const Login = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<IProps>({
    id: '',
    password: '',
  });

  const { id, password } = userInfo;

  const userInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const visibleHandler = () => {
    setisVisible(!isVisible);
  };

  // const isValid = id && password;

  const canSubmit = id && password;

  console.log(canSubmit);

  return (
    <StWrapper>
      <StLogin>
        <StHeader>Login</StHeader>
        <StBody>
          <StInput
            value={id}
            name="id"
            placeholder="아이디"
            onChange={userInfoHandler}
          />
          <StInput
            value={password}
            name="password"
            type={isVisible ? 'text' : 'password'}
            placeholder="비밀번호"
            onChange={userInfoHandler}
          />
          {isVisible ? (
            <StOpen onClick={visibleHandler} />
          ) : (
            <StClosed onClick={visibleHandler} />
          )}
        </StBody>
        <StFooter>
          <StButton>회원가입</StButton>
          <StButton>로그인</StButton>
        </StFooter>
      </StLogin>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c49f9f;
  box-sizing: border-box;
`;

const StLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 470px;
  height: 100vh;
  background: white;
`;

const StHeader = styled.p`
  font-size: 32px;
  text-align: center;
`;

const StBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const StInput = styled.input`
  margin-top: 30px;
  width: 60%;
  height: 30px;
`;

const StOpen = styled(RxEyeOpen)`
  position: absolute;
  bottom: 9px;
  right: 60px;
  font-size: 18px;
  cursor: pointer;
`;

const StClosed = styled(RxEyeClosed)`
  position: absolute;
  bottom: 9px;
  right: 60px;
  font-size: 18px;
  cursor: pointer;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 62%;
`;

const StButton = styled.button`
  width: 40%;
  height: 30px;
`;

export default Login;
