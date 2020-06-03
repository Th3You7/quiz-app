import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 8px 0 0;
`;

const Wrapper = styled.div`
  display: block;
  text-align: center;
  padding: 16px 24px;
  background: #f6f6f6;
  color: #023642;
  border-radius: 4px;
`;
const Category = ({ img, category }) => {
  return (
    <Wrapper>
      <img src={img} alt="category" />
      <Title>{category}</Title>
    </Wrapper>
  );
};

export default Category;
