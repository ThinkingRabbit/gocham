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
  margin: 0 auto;
  width: 390px;
  height: 100vh;
`;

const StWrapper = styled.div`
  width: 100%;
  display: inline-block;
  height: 100vh;
`;

export default Layout;
