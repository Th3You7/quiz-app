import React, { useContext } from "react";
import styled from "styled-components";
import createMarkup from "../utils/createMarkup";
import Context from "../contexts/Context";

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
  const { handleSelect } = useContext(Context);
  return (
    <Wrapper
      dangerouslySetInnerHTML={createMarkup(content)}
      onClick={handleSelect}
    />
  );
};

export default Answer;
