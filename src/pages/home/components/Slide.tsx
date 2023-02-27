import Content from './Content';
// import data from '../../../data/testData';
import { Wrapper, VoteSection, Button } from '../style/slide';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { testData } from '../../../states/testData';
import { Data, SlideData } from '../type';
import BarGraph from './BarGraph';
import GlassButton from './GlassButton';

function Slide(any: any) {
  const { id } = useParams();

  const [click, setClick] = useState(false);
  const [inputData, setInputData] = useRecoilState(testData);

  const onClick = () => {
    setClick(true);
    setInputData(inputData => {
      const updatedResult = inputData.result.reduce((acc, cur) => {
        if (cur.id === +id!) {
          acc = { ...cur.vote, vote_click: true };
          return acc;
        }
        return acc;
      }, {}) as any; // 누적값의 초기값으로 빈 객체를 전달
      const updatedData = {
        ...inputData,
        result: inputData.result.map(poster => {
          if (poster.id === +id!) {
            return { ...poster, vote: updatedResult };
          }
          return poster;
        }),
      };
      return updatedData;
    });
  };

  return (
    <>
      {inputData.result.map(poster => {
        if (poster!.id === +id!) {
          return (
            <Wrapper key={poster.id}>
              <Content {...poster} />

              <VoteSection onClick={onClick}>
                {poster.vote.vote_click ? (
                  <BarGraph {...poster.vote} />
                ) : (
                  <GlassButton title={poster.vote.vote_text} />
                )}
              </VoteSection>
            </Wrapper>
          );
        }
      })}
    </>
  );
}

export default Slide;
