import styled from '@emotion/styled';
import { sign } from 'crypto';
import React, { useState } from 'react';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [isVisible, setisVisible] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<IProps>({
    id: '',
    password: '',
  });

  const { id, password } = userInfo;

  const signupInfo = localStorage.getItem('userInfo');

  const isValid = JSON.stringify(userInfo) === signupInfo;

  const canSubmit = id !== '' && password !== '';

  const visibleHandler = () => {
    setisVisible(!isVisible);
  };

  const userInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submit = () => {
    if (!canSubmit) {
      return window.alert('아이디, 비밀번호를 모두 입력해주세요');
    }

    if (!isValid) {
      return window.alert('아이디, 비밀번호를 확인해주세요');
    }

    localStorage.setItem('isLogin', 'true');

    navigate('/');
  };

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
          <StButton
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </StButton>
          <StButton onClick={submit}>로그인</StButton>
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
