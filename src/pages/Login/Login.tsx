import styled from '@emotion/styled';
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
            style={{
              background: 'white',
              color: '#5783fc',
              border: '1px solid #5783fc',
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
  background: #5783fc;
`;

const StLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  height: 100vh;
  background: white;
  border: 1px solid black;
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
  padding: 5px;
  padding-left: 10px;
  width: 60%;
  height: 40px;
  border: none;
  border: 2px solid #5783fc;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StOpen = styled(RxEyeOpen)`
  position: absolute;
  bottom: 11px;
  right: 50px;
  font-size: 18px;
  cursor: pointer;
`;

const StClosed = styled(RxEyeClosed)`
  position: absolute;
  bottom: 11px;
  right: 50px;
  font-size: 18px;
  cursor: pointer;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 60%;
`;

const StButton = styled.button`
  padding-top: 3px;
  width: 45%;
  height: 35px;
  color: white;
  background-color: #5783fc;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Login;
