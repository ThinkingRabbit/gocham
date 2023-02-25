import React from 'react';
import styled from "@emotion/styled";
import * as S from "./Comment.style";
import IUser from "../../../../assets/icon/icon_user.png";
import ILike from "../../../../assets/icon/icon_like.png";

const Comment = () => {
  return (
    <S.CommentWrapper>
      <S.InfoWrapper>
        <S.WriterWrapper>
          <S.ImgUser src={IUser} alt="프로필"/>
          <S.Name>디아</S.Name>
          <S.Badge></S.Badge>
        </S.WriterWrapper>
        <S.LikeWrapper>
          <S.BtnLike type="button">
            <img src={ILike} alt="좋아요"/>
          </S.BtnLike>
          <S.LikeCount>1,234</S.LikeCount>
        </S.LikeWrapper>
      </S.InfoWrapper>
      <S.Comment>내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.</S.Comment>
    </S.CommentWrapper>
  );
};

export default Comment;

const test = styled.div`
  
`