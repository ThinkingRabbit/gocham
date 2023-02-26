import {
  Wrapper,
  ImgBox,
  FunctionalBox,
  TextBox,
  VoteText,
} from '../style/content';
import Header from './Header';
import Icon from './Icon';
import { SlideData } from '../type/index';

function Content(post: SlideData) {
  return (
    <Wrapper>
      <Header />
      <ImgBox bgphoto={post.poster_path}></ImgBox>
      <FunctionalBox>
        <Icon />
        <VoteText>{`투표 참여 : ${post.vote.vote_count}`}</VoteText>
      </FunctionalBox>
      <TextBox>{post.text}</TextBox>
    </Wrapper>
  );
}

export default Content;
