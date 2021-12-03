import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "./responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "0px 20px" })};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "0px" })}
`;
const Title = styled.h2`
  font-size: 50px;
  font-weight: 200;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 100px;
  margin: 30px 0;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 50px 0;
  ${mobile({ margin: "0px", justifyContent: "space-between" })};
`;
const Filter = styled.div`
  display: flex;
  margin-right: 140px;
  ${mobile({ justifyContent: "center", margin: "0px" })}
`;
const FilterTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.5px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  font-size: 18px;
`;
const AddContainer = styled.div`
  display: flex;
  margin-top: 50px;
  ${mobile({ justifyContent: "space-between" })}
`;
const AmountContainer = styled.div`
  display: flex;
  margin-right: 200px;
  ${mobile({ margin: "0px" })}
`;
const Remove = styled.div`
  font-size: 30px;
  margin-right: 10px;
  font-weight: 600;
`;

const Amount = styled.span`
  font-size: 30px;
  margin-right: 10px;
  font-weight: 600;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #69d2e7;
`;
const Add = styled.div`
  font-size: 30px;
  margin-right: 10px;
  font-weight: 600;
`;
const Button = styled.button`
  background-color: white;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #e0e4cc;
  }
`;

const Product = () => {
  return (
    <Container>
      <Anouncement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>T-Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur quas tenetur veritatis mollitia commodi pariatur harum
            consequuntur unde aut explicabo ipsum atque, aspernatur inventore,
            ipsa sit ut exercitationem consequatur voluptate!
          </Desc>
          <Price>$35</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color :</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="yellow" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <FilterTitle>Size :</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove>-</Remove>
              <Amount>1</Amount>
              <Add>+</Add>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
