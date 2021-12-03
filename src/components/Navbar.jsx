import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  ${mobile({
    display: "none",
  })}
`;
const Searchcontainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Input = styled.input`
  padding: 5px 0px;
  border: none;
  ${mobile({ width: "50px", marginLeft: "5px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "20px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Menuitem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </Searchcontainer>
        </Left>
        <Center>
          <Logo>MODAL</Logo>
        </Center>
        <Right>
          <Menuitem>REGISTER</Menuitem>
          <Menuitem>SIGN IN</Menuitem>
          <Menuitem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </Menuitem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
