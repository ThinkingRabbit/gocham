import Content from './Content';
import data from '../../../data/testData';
import { Wrapper, VoteSection, Button } from '../style/slide';
import { useParams } from 'react-router-dom';

function Slide(any: any) {
  const { id } = useParams();
  console.log(typeof id);

  return (
    <>
      {data.result.map((poster) => {
        if (poster!.id === +id!) {
          return (
            <Wrapper key={poster.id}>
              <Content {...poster}></Content>

              <VoteSection>
                <Button>{poster.vote.vote_text[0]}</Button>
                <Button>{poster.vote.vote_text[1]}</Button>
              </VoteSection>
            </Wrapper>
          );
        }
      })}
    </>
  );
}

export default Slide;
