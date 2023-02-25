import styled from '@emotion/styled';
import Content from './Content';
import VoteSection from './VoteSection';

function Slide() {
  return (
    <Wrapper>
      <Content></Content>
      <VoteSection />
    </Wrapper>
  );
}

export default Slide;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 90vh;
  min-height: 500px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
