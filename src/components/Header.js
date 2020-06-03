import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  width: 100%;
  padding: 56px;
  margin: 0;
  text-align: center;
`;

const Header = ({ children }) => {
  return <Title>{children}</Title>;
};

export default Header;
