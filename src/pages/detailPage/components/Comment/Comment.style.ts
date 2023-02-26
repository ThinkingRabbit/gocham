import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
  box-shadow: 1px 2px 5px 0 #00000060;
  border-radius: 10px;
  max-width: 560px;
  padding: 9px 13px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgUser = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const Name = styled.strong`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 14px;
`;

type BadgeStyle = {
  isBlue: boolean;
};

export const Badge = styled.span<BadgeStyle>`
  display: inline-block;
  border-radius: 5px;
  padding: 4px 6px;
  text-align: center;
  font-size: 12px;
  color: #484848;
  background-color: ${props => (props.isBlue ? '#8BA5FF' : '#FF8B8B')};
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnLike = styled.button`
  border: none;
  background: none;
  img {
    display: inline-block;
    width: 24px;
    margin-right: 8px;
  }
`;

export const LikeCount = styled.small`
  font-size: 14px;
  color: #484848;
`;

export const Comment = styled.p`
  line-height: 24px;
`;
