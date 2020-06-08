import React from "react";
import Answer from "../components/Answer";
import styled from "styled-components";
import shuffle from "../utils/shuffle";
import createMarkup from "../utils/createMarkup";

const QuestionNum = styled.p`
  color: #373d46;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 4px dashed #373d46;
`;
const Num = styled.span`
  font-size: 32px;
  color: #b1b1b1;
  font-weight: 600;
`;
const Quest = styled.p`
  font-size: 24px;
  font-weight: 600;
  min-height: 100px;
  margin: 0 0 8px 0;
  color: #f1f1f1;
  text-transform: capitalize;
`;

const Question = ({ test, index, onClick }) => {
  const { results } = test;
  const { type, correct_answer, incorrect_answers } = results[index];
  const { question } = results[index];
  const answers =
    type === "boolean"
      ? ["True", "False"]
      : shuffle([correct_answer, ...incorrect_answers]);

  return (
    <>
      <QuestionNum>
        <Num>Question {index + 1}</Num>/10
      </QuestionNum>
      <Quest dangerouslySetInnerHTML={createMarkup(question)}></Quest>
      {answers.map((item, index) => {
        return <Answer key={index} content={item} />;
      })}
    </>
  );
};

export default Question;
