import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(19, 196, 138, 0.5), rgba(226, 194, 240, 0.5)),
    url("https://images.unsplash.com/photo-1562592282-9dd0ca7d71ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ fontSize: "20px", textAlign: "center" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;
const Input = styled.input`
  flex: 1;
  width: 50%;
  min-width: 40%;
  margin: 10px 10px 10px 0;
  padding: 5px 5px;
  ${mobile({ width: "90%", margin: "10px" })}
`;
const Button = styled.button`
  width: 40%;
  background-color: #69d2e7;
  color: white;
  padding: 15px;
  min-width: 40%;
  margin-bottom: 10px;
  cursor: pointer;
  ${mobile({ width: "50%", margin: "10px" })}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE A NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="user name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Button>CREATE</Button>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
