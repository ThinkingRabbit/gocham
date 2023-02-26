import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
  image: string;
}

const Carousel = ({ image }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StSlider {...settings}>
      <StImage src={image} alt="이미지" />
    </StSlider>
  );
};

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
