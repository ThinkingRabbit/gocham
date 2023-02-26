import styled from '@emotion/styled';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <StWrapper>
      <StLayout>{children}</StLayout>
    </StWrapper>
  );
};

const StLayout = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  border: 1px solid black;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

const StWrapper = styled.div`
  width: 100%;
  display: inline-block;
  height: 100vh;
`;

export default Layout;
