import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from '../pages/responsive'

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
    flex:1;
    display:flex:
    flex-direction:column;
    padding: 20px;

`;
const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const Infomation = styled.div`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 10px;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MODAL</Logo>
        <Infomation>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Infomation>
        <SocialContainer>
          <SocialIcon bg="115293">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55AC5E">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          195 Xô Viết Nghệ Tỉnh, F25, Bình Thạnh, Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +08 9272 9227
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          ThanhLinhNa@gmail.com
        </ContactItem>
        <Payment src="https://highclass.net.au/wp-content/uploads/2017/07/paypal.png" />
      </Right>
    </Container>
  );
};

export default Footer;
