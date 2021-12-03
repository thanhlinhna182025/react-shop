import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import { mobile } from "./responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border: ${(props) => props.type === "filled" && "none"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  ${mobile({ marginBottom: "20px" })}
`;
const ProductItem = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "20px" })}
`;
const ProductImage = styled.img`
  width: 200px;
  margin-right: 10px;
  ${mobile({ width: "100px" })}
`;
const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  flex: 2;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Add = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Remove = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Amount = styled.span`
  font-size: 50px;
  margin: 0 10px;
`;
const AmountMoney = styled.span`
  font-size: 30px;
  font-weight: 300;
`;
const ItemTitle = styled.span``;
const ItemMoney = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`;
const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;
const Button = styled.button`
  margin-bottom: 80px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <ProductContainer>
            <ProductItem>
              <ProductInfoContainer>
                <ProductInfoWrapper>
                  <ProductImage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  <ProductDetail>
                    <ProductName>
                      <b>Product Name :</b>T-Shirt
                    </ProductName>
                    <ProductId>
                      <b>Product Id :</b>208393728
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <b>Product size :</b>39.5
                    </ProductSize>
                  </ProductDetail>
                </ProductInfoWrapper>
                <AmountContainer>
                  <AmountWrapper>
                    <Add>+</Add>
                    <Amount>2</Amount>
                    <Remove>-</Remove>
                  </AmountWrapper>
                  <AmountMoney>$ 90</AmountMoney>
                </AmountContainer>
              </ProductInfoContainer>
            </ProductItem>
            <Hr />
            <ProductItem>
              <ProductInfoContainer>
                <ProductInfoWrapper>
                  <ProductImage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  <ProductDetail>
                    <ProductName>
                      <b>Product Name :</b>T-Shirt
                    </ProductName>
                    <ProductId>
                      <b>Product Id :</b>208393728
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <b>Product size :</b>39.5
                    </ProductSize>
                  </ProductDetail>
                </ProductInfoWrapper>
                <AmountContainer>
                  <AmountWrapper>
                    <Add>+</Add>
                    <Amount>2</Amount>
                    <Remove>-</Remove>
                  </AmountWrapper>
                  <AmountMoney>$ 90</AmountMoney>
                </AmountContainer>
              </ProductInfoContainer>
            </ProductItem>
          </ProductContainer>
          <SummaryContainer>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <ItemTitle>Subtutal</ItemTitle>
              <ItemMoney>$ 80</ItemMoney>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Estimated shipping</ItemTitle>
              <ItemMoney>$ 5.90</ItemMoney>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Shipping discount</ItemTitle>
              <ItemMoney>$ -5.90</ItemMoney>
            </SummaryItem>
            <SummaryItem type="total">
              <ItemTitle>Total</ItemTitle>
              <ItemMoney>$ 80</ItemMoney>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </SummaryContainer>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
