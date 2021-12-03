import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8e1b4;
  padding: 100px;
  justify-content: center;
  align-items: center;
  ${mobile({ padding: "20px" })}
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 30px 0px;
`;
const Inputcontainer = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  border: none;
  background-color: #fff;
`;
const Input = styled.input`
  flex: 9;
  border: 1px solid gray;
  padding-left: 20px;
  border-radius: 1px;
`;
const Button = styled.button`
  flex: 1;
  background-color: #00d2f1;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Inputcontainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </Inputcontainer>
    </Container>
  );
};

export default Newsletter;
