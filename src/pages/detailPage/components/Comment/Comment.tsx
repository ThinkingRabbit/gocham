import React from 'react';
import styled from '@emotion/styled';
import * as S from './Comment.style';
import IUser from '../../../../assets/icon/icon_user.png';
import ILike from '../../../../assets/icon/icon_like.png';

const Comment = () => {
  return (
    <S.CommentWrapper>
      <S.InfoWrapper>
        <S.WriterWrapper>
          <img src={IUser} alt="프로필" />
          <S.Name>제이</S.Name>
          <S.Badge />
        </S.WriterWrapper>
        <div>
          <img src={ILike} alt="좋아요" />
          <small>카운트</small>
        </div>
      </S.InfoWrapper>
      <p>
        내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이
        작성됩니다.내용이 작성됩니다.내용이 작성됩니다.
      </p>
    </S.CommentWrapper>
  );
};

export default Comment;

const test = styled.div``;
