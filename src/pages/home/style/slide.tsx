import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  min-height: 500px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const VoteSection = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  height: 58px;
  margin: 0 1em 3em 1em;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
  border: 0;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  /* &:first-child {
    border-right: 0.5px solid black;
    border-radius: 2em 0 0 2em;
  }
  &:last-child {
    border-left: 0.5px solid black;
    border-radius: 0 2em 2em 0;
  } */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-radius: 4px;
    transition: box-shadow 0.5s ease, transform 0.2s ease;
    will-change: transform;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
  }

  &:hover::before {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::after {
    position: relative;
    display: inline-block;
    content: attr(data-title);
    transition: transform 0.2s ease;
    font-weight: bold;
    letter-spacing: 0.01em;
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0));
  }
`;
