import React from 'react';
import Comment from "./components/Comment/Comment";
import {CommentType} from "./type/comment.type";

const Index = () => {
  const comment: CommentType = {
    id: 1,
    name: "디아",
    profile: "",
    comment: "내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.내용이 작성됩니다.",
    selected: "신발을 산다",
    isBlue: true,
    like: {
      isLiked: false,
      likeCount: 1234,
    }
  }

  return (
    <div>
      <h2>상세조회 페이지</h2>
      <Comment {...comment}/>
    </div>
  );
};

export default Index;