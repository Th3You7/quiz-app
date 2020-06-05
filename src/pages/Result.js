import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Context from "../contexts/Context";
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
  const { reset } = useContext(Context);
  const history = useHistory();

  const homePath = () => {
    reset();
    history.push("/");
  };

  return (
    <>
      <Header>Result</Header>
      <Img src={img} alt="trophy" />
      <Text>Congrats</Text>
      <Para>
        <Span>10{""}</Span>/{""}10
      </Para>
      <Button onClick={homePath}>Start Over</Button>
    </>
  );
};

export default Result;
