import styled from '@emotion/styled';
import { Vote } from '../type';

// Colour variables
// =====================
const primaryColor = '#63cdda';

// Basic setup
// =====================

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
`;

const BarContainer = styled.div`
  background: linear-gradient(135deg, #295fd5, #9d8ce0);
  margin-bottom: 20px;
  display: flex;
  border-radius: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const BarItem = styled.div<{ width: number }>`
  background-color: #63cdda;
  padding: 33px 0 25px 0;
  width: ${props => String(props.width) + '%'};
`;

const BarName = styled.span`
  font-size: 15px;
`;

const BarBox = styled.div`
  background-color: black;
  &:first-child {
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
  }
  &:last-child {
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
  }
  color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* const Skill1 = styled.div`
  width: 50%;
  position: relative;
  &::after {
    content: '50%';
    position: absolute;
    right: -50px;
  }
`; */
const Rate = styled.span``;

const Box = styled.div`
  width: 100%;
  box-sizing: content-box;
`;
function BarGraph(vote: Vote) {
  const { vote_case_left, vote_case_right, vote_count, vote_text } = vote;
  return (
    <Container>
      <BarContainer>
        <BarBox>
          <BarName>{vote_text[0]}</BarName>
          <Rate>{`${Math.floor((vote_case_left / vote_count) * 100)}%`}</Rate>
        </BarBox>

        <Box>
          <BarItem width={Math.floor((vote_case_left / vote_count) * 100)} />
        </Box>

        <BarBox>
          <BarName>{vote_text[1]} </BarName>
          <Rate>{`${Math.floor((vote_case_right / vote_count) * 100)}%`}</Rate>
        </BarBox>
      </BarContainer>
    </Container>
  );
}

export default BarGraph;
