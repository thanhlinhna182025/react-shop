import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #008080;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  fontsize: 16px;
  font-weight: 500;
`;
const Anouncement = () => {
  return <Container>Supper sale on summer! free shipping</Container>;
};

export default Anouncement;
