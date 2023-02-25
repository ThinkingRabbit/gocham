import React, {useState} from 'react';
import * as S from "./Comment.style";
import IUser from "../../../../assets/icon/icon_user.png";
import ILike from "../../../../assets/icon/icon_like.png";
import ILikeF from "../../../../assets/icon/icon_like_filled.png";

const Comment = () => {
  const [isLike, setIsLike] = useState(false);

  const comment = {
    name: "디아",
    profile: "",
    likeCount: 1234,
    comment: "내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.",
    selected: "신발을 산다",
    isBlue: true,
    isLiked: false,
  }

  const isLikeClicked = () => {
    setIsLike(prev => !prev);
  };


  return (
    <S.CommentWrapper>
      <S.InfoWrapper>
        <S.WriterWrapper>
          <S.ImgUser src={comment.profile ? comment.profile : IUser} alt=""/>
          <S.Name>{comment.name}</S.Name>
          <S.Badge isBlue={comment.isBlue}>{comment.selected}</S.Badge>
        </S.WriterWrapper>
        <S.LikeWrapper>
          <S.BtnLike type="button" onClick={isLikeClicked}>
            <img src={isLike ? ILikeF : ILike} alt="좋아요"/>
          </S.BtnLike>
          <S.LikeCount>{comment.likeCount.toLocaleString()}</S.LikeCount>
        </S.LikeWrapper>
      </S.InfoWrapper>
      <S.Comment>{comment.comment}</S.Comment>
    </S.CommentWrapper>
  );
};

export default Comment;
