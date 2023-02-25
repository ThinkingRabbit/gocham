import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  min-height: 500px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const VoteSection = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  height: 58px;
  margin: 0 1em 3em 1em;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Button = styled.button`
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
