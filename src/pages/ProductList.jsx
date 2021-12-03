import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "./responsive";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin: 0 20px;
  text-align: center;
  ${mobile({
    fontSize: "40px",
  })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
const Filter = styled.div`
  ${mobile({
    flexDirection: "column",
    display: "flex",
  })}
`;
const FilterText = styled.span`
  font-size: 30px;
  font-weight: 600px;
  margin-right: 20px;
  ${mobile({
    fontSize: "20px",
  })}
`;
const Seclect = styled.select`
  padding: 10px 5px;
  margin-right: 20px;
  ${mobile({
    marginBottom: "20px",
  })}
`;
const Option = styled.option`
  font-size: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Seclect>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>White</Option>
            <Option>Pink</Option>
          </Seclect>
          <Seclect>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Seclect>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Seclect>
            <Option selected>NEWEST</Option>
            <Option>Price(ASC)</Option>
            <Option>Price(DESC)</Option>
          </Seclect>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
