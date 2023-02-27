import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegThumbsUp } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';

const Index = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isLiked, setisLiked] = useState<boolean>(false);

  const [isCopied, setisCopied] = useState<boolean>(false);

  const [comment, setComment] = useState<string>('');

  const [comments, setComments] = useState<string[]>([]);

  const { url, image, voteCount, description } = location.state;

  const postId: string = location.pathname.split('/')[2];

  const canSubmit: boolean = comment.length > 0;

  const storageComments = localStorage.getItem('comments');

  const parsedCurPageComments: string[] =
    storageComments !== null && JSON.parse(storageComments)[postId];

  const parsedStorageComments =
    storageComments !== null && JSON.parse(storageComments);

  useEffect(() => {
    if (!parsedCurPageComments) {
      return localStorage.setItem(
        'comments',
        JSON.stringify({ ...parsedStorageComments, [postId]: [] })
      );
    }

    setComments([...parsedCurPageComments]);
  }, []);

  const pageHandler = () => {
    navigate('/');
  };

  const handleLikeClick = () => {
    setisLiked(true);
  };

  const handleUnlikeClick = () => {
    setisLiked(false);
  };

  const likeHandler = () => {
    isLiked ? handleUnlikeClick() : handleLikeClick();
  };

  const handleCopyUrlClick = () => {
    setisCopied(true);
    navigator.clipboard.writeText(url);
  };

  const commentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const commentsHandler = () => {
    setComments([...comments, comment]);
  };

  const clearInputHandler = () => {
    setComment('');
  };

  const submitComment = () => {
    if (!canSubmit) {
      return window.alert('댓글을 입력해주세요');
    }

    localStorage.setItem(
      'comments',
      JSON.stringify({
        ...parsedStorageComments,
        [postId]: [...comments, comment],
      })
    );

    commentsHandler();

    clearInputHandler();
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitComment();
    }
  };

  return (
    <StWrapper>
      <StDetail>
        <StHeader>
          <StBackIcon onClick={pageHandler} />
          <StMenuIcon />
        </StHeader>
        <StBody>
          <StImage src={image} alt="이미지" />
          <StSocial>
            <StIconBox>
              <StLike isLiked={isLiked} onClick={likeHandler} />
              <StShare isCopied={isCopied} onClick={handleCopyUrlClick} />
            </StIconBox>
            <StParcitipation>투표 참여 : {voteCount}</StParcitipation>
          </StSocial>
          <StInfo>{description}</StInfo>
          {comments.map((cur, idx) => (
            <StComment key={idx}>{cur}</StComment>
          ))}
        </StBody>
        <StFooter>
          <StInput
            value={comment}
            onKeyPress={onKeyPressHandler}
            onChange={commentHandler}
          />
          <StSubmitBtn onClick={submitComment}>등록</StSubmitBtn>
        </StFooter>
      </StDetail>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #5783fc;
`;

const StDetail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  height: 100vh;
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
  margin-top: 20px;
  margin-left: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const StMenuIcon = styled(RxHamburgerMenu)`
  margin-top: 20px;
  margin-right: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const StBody = styled.div`
  width: 100%;
`;

const StImage = styled.img`
  display: inline-block;
  width: 100%;
`;

const StSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
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
  color: ${({ isLiked }) => (isLiked ? '#5783fc;' : 'black')};
  cursor: pointer;
`;

const StShare = styled(RiSendPlaneLine)<{ isCopied: boolean }>`
  width: 26px;
  height: 26px;
  color: ${({ isCopied }) => (isCopied ? '#5783fc;' : 'black')};
  cursor: pointer;
`;

const StParcitipation = styled.p`
  width: 100%;
  text-align: right;
`;

const StInfo = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const StComment = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StFooter = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
`;

const StInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StSubmitBtn = styled.button`
  width: 18%;
  height: 30px;
  border: none;
  border: 1px solid #5783fc;
  color: white;
  background: #5783fc;
  border-radius: 5px;
`;

export default Index;
