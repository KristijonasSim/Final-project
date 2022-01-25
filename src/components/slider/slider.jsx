/* eslint-disable */
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 
import { useState } from "react";
import { SliderImages } from "../../Sliderimages";

  const Container = styled(`div`)({
    width: '100%',
    height: '75vh',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#FFFAFA',
    margin: 0,
    padding: 0,
  })

  const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
  
  const Slide = styled('div')({
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  })
  const ImgContainer = styled('div')({
    flex:1,
    height: '100%'
  })
  const InfoContainer = styled('div')({
    flex:1
  })
  const Image = styled('img')({
    height: '90%'

  })

  const Title = styled('h1')({
    fontSize: 70
  })
  const Desc = styled('p')({
    margin: '50px, 0px',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 3
  })
  const Button = styled('button')({
    padding: 10,
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer'
  })
  const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };


  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <ArrowBackIosIcon />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {SliderImages.map((item) => (
        <Slide key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      ))}
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowForwardIosIcon />
    </Arrow>
  </Container>
  )
}

export default Slider
