import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`;

const Load = styled.div`
  display: block;
`;

const loading = keyframes`
0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Line = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #e2dbc9;
  margin-left: 6px;
  animation: ${loading} 0.6s
    ${(props) => (props.first ? "0.1s" : props.second ? "0.2s" : "0.3s")} linear
    infinite;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Load>
        <Line first></Line>
        <Line second></Line>
        <Line last></Line>
      </Load>
    </Wrapper>
  );
};

export default Loading;
