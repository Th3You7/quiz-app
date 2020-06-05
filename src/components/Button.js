import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  outline: 0;
  border: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 32px 0;
  padding: 16px 32px;
  color: white;
  background: #34aec3;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
