import React from "react";
import styled from "styled-components";
import createMarkup from "../utils/createMarkup";

const Wrapper = styled.div`
  padding: 16px;
  margin-bottom: 12px;
  border: 3px solid #373d46;
  border-radius: 12px;
  color: #b1b1b1;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
`;

const Answer = ({ content }) => {
  return <Wrapper dangerouslySetInnerHTML={createMarkup(content)} />;
};

export default Answer;
