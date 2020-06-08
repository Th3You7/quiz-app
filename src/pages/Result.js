import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Context from "../contexts/Context";
import styled from "styled-components";
import trophy from "../imgs/trophy.png";
import shoked from "../imgs/shoked.png";
import notBad from "../imgs/not-bad.png";
import bad from "../imgs/bad.png";
import smiley from "../imgs/smiley.png";
import good from "../imgs/good.png";

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
  const { reset, res } = useContext(Context);
  const history = useHistory();

  const score = res.filter((el) => el === true).length;
  const homePath = () => {
    reset();
    history.push("/");
  };

  return (
    <>
      <Header>Result</Header>

      {score === 10 ? (
        <>
          <Img src={trophy} alt="trophy" />
          <Text>Congrats</Text>
        </>
      ) : score === 0 ? (
        <>
          <Img src={shoked} alt="shoked" />
          <Text>Are you Dumb, Crazy or Dump ?!</Text>
        </>
      ) : score > 0 && score < 5 ? (
        <>
          <Img src={bad} alt="bad" />
          <Text>Very Bad</Text>
        </>
      ) : score === 5 || score === 6 ? (
        <>
          <Img src={notBad} alt="not bad" />
          <Text>Not Bad</Text>
        </>
      ) : score === 7 ? (
        <>
          <Img src={good} alt="good" />
          <Text>Good</Text>
        </>
      ) : score === 8 ? (
        <>
          <Img src={good} alt="very good" />
          <Text>Very Good</Text>
        </>
      ) : (
        <>
          <Img src={smiley} alt="great" />
          <Text>Great</Text>
        </>
      )}
      <Para>
        <Span>{score}</Span>/{""}10
      </Para>
      <Button onClick={homePath}>Start Over</Button>
    </>
  );
};

export default Result;
