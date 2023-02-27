import styled from '@emotion/styled';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { SlideData } from '../type';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { useState } from 'react';

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChatIcon = styled(BsChat)`
  font-size: 23px;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;

const LikeIcon = styled(AiOutlineLike)`
  font-size: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;

const LikeIconClickd = styled(AiTwotoneLike)`
  font-size: 30px;
  color: #5883fc;
  cursor: pointer;
`;

function Icon(post: SlideData) {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick(!click);
  };

  const navigate = useNavigate();

  const location = useLocation();

  const postId: string = location.pathname.split('/')[2];

  const url: string = `localhost:3000${location.pathname}`;

  const pageHandler = () => {
    navigate(`/detail-page/${postId}`, {
      state: {
        url: url,
        image: post.poster_path,
        voteCount: post.vote.vote_count,
        description: post.text,
      },
    });
  };
  return (
    <IconBox>
      <ChatIcon onClick={pageHandler} />
      {click ? (
        <LikeIconClickd onClick={onClick} />
      ) : (
        <LikeIcon onClick={onClick} />
      )}
    </IconBox>
  );
}

export default Icon;
