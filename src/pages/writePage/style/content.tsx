import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 516px;

  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Header = styled.div`
  height: 45px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border-radius: 20px;
`;

export const ImgBox = styled.div<{ bgphoto: string }>`
  background-image: url(${props => props.bgphoto});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 312px;
`;

export const FunctionalBox = styled.div`
  height: 40px;
  background: #f3f3f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3px 0;
  padding: 0 10px 0 10px;
`;

export const TextBox = styled.div`
  background-color: #f5f5f5;
  height: 56px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  padding: 10px 10px 0 10px;
`;

export const VoteText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #484848;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;
