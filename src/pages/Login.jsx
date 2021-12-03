import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(19, 196, 138, 0.5), rgba(226, 194, 240, 0.5)),
    url("https://images.unsplash.com/photo-1621036569971-8bc3014cc8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  ${mobile({ width: "75%" })}
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px 5px;
`;
const Button = styled.button`
  width: 40%;
  background-color: #69d2e7;
  color: white;
  padding: 15px;
  min-width: 40%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
  margin: 10px 0;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="user name"></Input>
          <Input placeholder="password"></Input>
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
