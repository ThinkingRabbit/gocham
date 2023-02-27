import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  display: flex;
  //flex-direction: column;
  //flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 40px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

const Button = styled.div`
  position: relative;

  top: 3px;
  left: -7px;
  width: 44%;
  height: 28px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    width: 30px;
    height: 10px;
    z-index: 1;
    background: #f00;
    border-radius: 1px;
    transition: 0.5s;
    transition-delay: 0.5;
  }

  &:before {
    bottom: 2px;
  }

  &:after {
    top: 0px;
  }

  &:hover {
    &:before {
      bottom: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
    }

    &:after {
      top: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
    }

    p {
      letter-spacing: 3px;
    }

    p:hover::before {
      transform: skewX(45deg) translate(200px);
    }
  }

  p {
    position: absolute;
    top: -7px;
    left: -4px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: #fff;
    font-weight: 400px;
    z-index: 2;
    transition: 0.5s;
    backdrop-filter: blur(15px);
  }

  &:nth-of-type(1) {
    &:before,
    &:after {
      background: #ff1f71;
      box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
        0 0 60px #ff1f71;
    }
  }

  &:nth-of-type(2) {
    &:before,
    &:after {
      background: #2db2ff;
      box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
        0 0 60px #2db2ff;
    }
  }
`;
type Title = { title: string[] };

function GlassButton({ title }: Title) {
  return (
    <Container>
      <Button>
        <Box>
          <p>{title[0]}</p>
        </Box>
      </Button>

      <Button>
        <Box>
          <p>{title[1]}</p>
        </Box>
      </Button>
    </Container>
  );
}

export default GlassButton;
