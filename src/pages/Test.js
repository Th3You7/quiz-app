import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Question from "../components/Question";
import Button from "../components/Button";
import Context from "../contexts/Context";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Test = () => {
  const { isLoaded, test, handleNext, index } = useContext(Context);
  const history = useHistory();

  const resultPath = () => {
    history.push("/result");
  };

  if (!isLoaded) {
    return <p>loading wait please</p>;
  } else {
    return (
      <Wrapper>
        <Question test={test} index={index} />
        <Button onClick={index === 9 ? resultPath : handleNext}>
          {index === 9 ? "See Result" : "Next"}
        </Button>
      </Wrapper>
    );
  }
};

export default Test;
