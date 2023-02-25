import styled from '@emotion/styled';
import Content from './Content';

function Slide() {
  const Wrapper = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    min-height: 500px;
    width: 100%;
  `;

  const VoteSection = styled.div`
    height: 10%;
    display: flex;
    margin: 0 1em 3em 1em;
  `;

  const Button = styled.button`
    font-size: 33px;
    font-weight: 700;
    width: 100%;
    border: 0;
    background-color: #ededed;
    &:first-child {
      border-right: 0.5px solid black;
      border-radius: 2em 0 0 2em;
    }
    &:last-child {
      border-left: 0.5px solid black;
      border-radius: 0 2em 2em 0;
    }
  `;

  return (
    <Wrapper>
      <Content></Content>
      <VoteSection>
        <Button>찬성</Button>
        <Button>반대</Button>
      </VoteSection>
    </Wrapper>
  );
}

export default Slide;
