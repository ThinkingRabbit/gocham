import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StSlider {...settings}>
      {IMAGES.map((cur, idx) => (
        <StImage src={cur} key={idx} alt="이미지" />
      ))}
    </StSlider>
  );
};

const IMAGES = [
  'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
  'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
  'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
  'https://avatars.githubusercontent.com/u/126273825?s=64&v=4',
];

const StSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 300px;
  .slick-dots {
    position: absolute;
    top: 90%;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const StImage = styled.img`
  width: 100%;
  height: 300px;
  display: inline-block;
`;

export default Carousel;
