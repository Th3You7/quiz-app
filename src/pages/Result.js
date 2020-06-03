import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import styled from "styled-components";
import img from "../imgs/smiley.png";

const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

const Text = styled.div`
  text-align: center;
  margin: 16px 0;
  font-size: 32px;
  font-weight: 400;
`;

const Para = styled.p`
  font-size: 48px;
  font-weight: 600;
  color: white;
  text-align: center;
`;
const Span = styled.span`
  color: #145d2e;
  padding-right: 8px;
`;

const Result = () => {
  return (
    <>
      <Header>Result</Header>
      <Img src={img} alt="trophy" />
      <Text>Congrats</Text>
      <Para>
        <Span>10{""}</Span>/{""}10
      </Para>
      <Button>Start Over</Button>
    </>
  );
};

export default Result;
