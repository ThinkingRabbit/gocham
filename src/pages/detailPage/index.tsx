import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegThumbsUp } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { CommentType } from './type/comment.type';
import Carousel from './components/Carousel/Carousel';
import Comment from './components/Comment/Comment';

const Index = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isLiked, setisLiked] = useState<boolean>(false);

  const { image, voteCount, description } = location.state;

  const handleLikeClick = () => {
    setisLiked(true);
  };

  const handleUnlikeClick = () => {
    setisLiked(false);
  };

  const likeHandler = () => {
    isLiked ? handleUnlikeClick() : handleLikeClick();
  };

  const pageHandler = () => {
    navigate('/');
  };

  const comment: CommentType = {
    id: 1,
    name: '디아',
    profile: '',
    comment:
      '내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.',
    selected: '신발을 산다',
    isBlue: true,
    like: {
      isLiked: false,
      likeCount: 1234,
    },
  };

  return (
    <StWrapper>
      <StDetail>
        <StHeader>
          <StBackIcon onClick={pageHandler} />
          <StMenuIcon />
        </StHeader>
        <StBody>
          <Carousel image={image} />
          <StSocial>
            <StIconBox>
              <StLike isLiked={isLiked} onClick={likeHandler} />
              <StShare />
            </StIconBox>
            <StParcitipation>투표 참여 : {voteCount}</StParcitipation>
          </StSocial>
          <StInfo>{description}</StInfo>
        </StBody>
        <StFooter>
          <Comment {...comment} />
        </StFooter>
      </StDetail>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c49f9f;
`;

const StDetail = styled.div`
  position: relative;
  width: 470px;
  height: 790px;
  background: white;
`;

const StHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
`;

const StBackIcon = styled(MdArrowBackIos)`
  margin-top: 50px;
  margin-left: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const StMenuIcon = styled(RxHamburgerMenu)`
  margin-top: 50px;
  margin-right: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const StBody = styled.div`
  width: 100%;
`;

const StSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;

const StIconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StLike = styled(FaRegThumbsUp)<{ isLiked: boolean }>`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  color: ${({ isLiked }) => (isLiked ? 'blue' : 'black')};
  cursor: pointer;
`;

const StShare = styled(RiSendPlaneLine)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const StParcitipation = styled.p`
  width: 100%;
  text-align: right;
`;

const StInfo = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
`;

const StFooter = styled.div`
  width: 100%;
`;

export default Index;
