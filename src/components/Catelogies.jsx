import styled from "styled-components";
import { catelogies } from "../pages/data";
import CateloryItem from "./CateloryItem";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Catelogies = () => {
  return (
    <Container>
      {catelogies.map((item) => (
        <CateloryItem item={item} key={item.id}></CateloryItem>
      ))}
    </Container>
  );
};

export default Catelogies;
