import React from "react";
import Answer from "../components/Answer";
import Button from "../components/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const QuestionNum = styled.p`
  color: #373d46;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 4px dashed #373d46;
`;
const Num = styled.span`
  font-size: 32px;
  color: #b1b1b1;
  font-weight: 600;
`;
const Question = styled.p`
  font-size: 24px;
  font-weight: 600;
  min-height: 100px;
  margin: 0;
  color: #f1f1f1;
  text-transform: capitalize;
`;

const Test = () => {
  return (
    <Wrapper>
      <QuestionNum>
        <Num>Question 8</Num>/10
      </QuestionNum>
      <Question>who is ronaldo of brazil ?</Question>
      {[
        "am i a joke?",
        "i aint normal nigga",
        "all my niggas millis",
        "i promise they ant like this",
      ].map((item, index) => {
        return <Answer key={index} content={item} />;
      })}
      <Button>Next</Button>
    </Wrapper>
  );
};

export default Test;
