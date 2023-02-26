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
import { useLocation, useNavigate } from 'react-router-dom';

function Content(post: SlideData) {
  const navigate = useNavigate();

  const location = useLocation();

  const postId = location.pathname.split('/')[2];

  const pageHandler = () => {
    navigate(`/detail-page/${postId}`, {
      state: {
        image: post.poster_path,
        voteCount: post.vote.vote_count,
        description: post.text,
      },
    });
  };

  return (
    <Wrapper>
      <Header />
      <ImgBox bgphoto={post.poster_path} onClick={pageHandler} />
      <FunctionalBox>
        <Icon />
        <VoteText>{`투표 참여 : ${post.vote.vote_count}`}</VoteText>
      </FunctionalBox>
      <TextBox>{post.text}</TextBox>
    </Wrapper>
  );
}

export default Content;
