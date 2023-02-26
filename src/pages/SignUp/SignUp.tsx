import styled from '@emotion/styled';
import React, { useState } from 'react';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: string;
  password: string;
  passwordCheck: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [isVisible, setisVisible] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<IProps>({
    id: '',
    password: '',
    passwordCheck: '',
  });

  const { id, password, passwordCheck } = userInfo;

  const visibleHandler = () => {
    setisVisible(!isVisible);
  };

  const userInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const canSubmit: boolean =
    id !== '' && password !== '' && passwordCheck !== '';

  const isValid: boolean = password === passwordCheck;

  const submit = () => {
    if (!canSubmit) {
      return window.alert(
        '아이디, 비밀번호, 비밀번호 확인 칸을 모두 입력해주세요'
      );
    }

    if (!isValid) {
      return window.alert('비밀번호가 일치하지 않습니다');
    }

    localStorage.setItem(
      'userInfo',
      JSON.stringify({ id: id, password: password })
    );

    window.alert('회원가입이 완료되었습니다');

    navigate('/login');
  };

  return (
    <StWrapper>
      <StSignUp>
        <StHeader>SignUp</StHeader>
        <StBody>
          <StInput
            placeholder="아이디를 입력해주세요"
            value={id}
            name="id"
            onChange={userInfoHandler}
          />
          <StInput
            placeholder="비밀번호를 입력해주세요"
            type={isVisible ? 'text' : 'password'}
            value={password}
            name="password"
            onChange={userInfoHandler}
          />
          <StInput
            placeholder="비밀번호를 한 번 더 확인해주세요"
            type={isVisible ? 'text' : 'password'}
            value={passwordCheck}
            name="passwordCheck"
            onChange={userInfoHandler}
          />
          {isVisible ? (
            <StOpen onClick={visibleHandler} />
          ) : (
            <StClosed onClick={visibleHandler} />
          )}
        </StBody>
        <StFooter onClick={submit}>완료</StFooter>
      </StSignUp>
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

const StSignUp = styled.div`
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

const StFooter = styled.button`
  margin-top: 30px;
  width: 62%;
  height: 35px;
`;

export default SignUp;
