import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  box-shadow: 1px 0 0 4px #00000080;
  max-width: 560px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: .5rem;
`

export const Name = styled.strong`
  font-size: 1rem;
  font-weight: bold;
`

export const Badge = styled.span`
  display: inline-block;
  border-radius: 5px;
  width: 40px;
  height: 20px;
  background-color: #8BA5FF;
`;