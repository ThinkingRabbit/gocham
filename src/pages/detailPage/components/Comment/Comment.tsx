import React, { useState} from 'react';
import * as S from "./Comment.style";
import IUser from "../../../../assets/icon/icon_user.png";
import ILike from "../../../../assets/icon/icon_like.png";
import ILikeF from "../../../../assets/icon/icon_like_filled.png";
import {CommentType} from "../../type/comment.type";

const Comment = (props: CommentType) => {
  const { id, comment, like, profile, selected, name, isBlue} = props;
  const [isLiked, setIsLiked] = useState(like.isLiked);
  const [likeCount, setLikeCount] = useState(like.likeCount);

  // TODO - 데이터의 isLiked 값으로 변경
  const isLikeClicked = () => {
    setIsLiked(prev => !prev);
    isLike();
  };

  const isLike = () => {
    if (props.like.isLiked) {
      // TODO - 좋아요 취소 API 요청
      return;
    }
    //  TODO -  좋아요 API 요청
  }

  return (
    <S.CommentWrapper>
      <S.InfoWrapper>
        <S.WriterWrapper>
          <S.ImgUser src={profile ? profile : IUser} alt=""/>
          <S.Name>{name}</S.Name>
          <S.Badge isBlue={isBlue}>{selected}</S.Badge>
        </S.WriterWrapper>
        <S.LikeWrapper>
          <S.BtnLike type="button" onClick={isLikeClicked}>
            <img src={isLiked ? ILikeF : ILike} alt="좋아요"/>
          </S.BtnLike>
          <S.LikeCount>{like.likeCount.toLocaleString()}</S.LikeCount>
        </S.LikeWrapper>
      </S.InfoWrapper>
      <S.Comment>{comment}</S.Comment>
    </S.CommentWrapper>
  );
};

export default Comment;
