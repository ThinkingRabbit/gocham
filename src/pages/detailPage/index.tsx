import styled from '@emotion/styled';
import React from 'react';
import Comment from './components/Comment/Comment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
    'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
    'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
    'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
  ];

  return (
    <StWrapper>
      <StDetail>
        <StHeader />
        <StBody>
          <StSlider {...settings}>
            {images.map((cur, idx) => (
              <img src={cur} key={idx} alt="이미지" />
            ))}
          </StSlider>
        </StBody>
        <StFooter>
          <Comment />
        </StFooter>
      </StDetail>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c49f9f;
`;

const StSlider = styled(Slider)`
  position: relative;
  height: 400px;
  width: 400px;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const StDetail = styled.div`
  width: 470px;
  height: 790px;
  background: white;
`;

const StHeader = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;

const StBody = styled.div`
  width: 100%;
`;

const StFooter = styled.div`
  width: 100%;
`;

export default Index;
