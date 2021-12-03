import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { useState } from "react";
import styled from "styled-components";
import { slicerItem } from "../pages/data";
import {mobile} from "../pages/responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    display:"none"
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1e5dd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliceIndex * -100}vw);
  transition: all 0.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  background-color: transparent;
`;

const Slider = () => {
  const [sliceIndex, setSliceIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliceIndex(sliceIndex > 0 ? sliceIndex - 1 : 2);
      console.log(sliceIndex);
    } else {
      setSliceIndex(sliceIndex < 2 ? sliceIndex + 1 : 0);
      console.log(sliceIndex);
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper sliceIndex={sliceIndex}>
        {slicerItem.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
