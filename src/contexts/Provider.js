import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Context";

const Provider = ({ children }) => {
  let [test, setTest] = useState([]);
  let [isLoaded, setLoad] = useState(false);
  let [index, setIndex] = useState(0);

  const handleClick = (value) => {
    getTest(value);
  };

  const handleNext = () => {
    setIndex(++index);
  };

  const reset = () => {
    setTest([]);
    setLoad(false);
    setIndex(0);
  };

  const getTest = async (category) => {
    await fetch(`https://opentdb.com/api.php?amount=10&category=${category}`)
      .then((res) => res.json())
      .then((res) => {
        setTest(res);
        setLoad(true);
      });
  };

  return (
    <Context.Provider
      value={{ handleClick, test, isLoaded, index, handleNext, reset }}
    >
      <Router>{children}</Router>
    </Context.Provider>
  );
};

export default Provider;
