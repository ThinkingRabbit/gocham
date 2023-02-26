export type CommentType = {
  id: number;
  name: string;
  profile: string;
  comment: string;
  selected: string;
  isBlue: boolean;
  like: {
    isLiked: boolean;
    likeCount: number;
  };
};
