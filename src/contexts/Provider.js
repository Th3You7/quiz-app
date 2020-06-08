import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Context";

const activeElem = document.getElementsByClassName("selected");

const handleSelect = (e) => {
  Array.from(activeElem).forEach((el) => el.classList.remove("selected"));
  e.target.classList.add("selected");
};

const Provider = ({ children }) => {
  let [test, setTest] = useState([]);
  let [isLoaded, setLoad] = useState(false);
  let [index, setIndex] = useState(0);
  let [res, setRes] = useState([]);

  const handleClick = (value) => {
    getTest(value);
  };

  const handleNext = () => {
    const { results } = test;
    const { correct_answer } = results[index];
    setRes([
      ...res,
      activeElem[0] !== undefined
        ? correct_answer === activeElem[0].innerHTML
        : false,
    ]);
    Array.from(activeElem).forEach((el) => el.classList.remove("selected"));
    setIndex(++index);
  };

  const reset = () => {
    setTest([]);
    setRes([]);
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
      value={{
        handleClick,
        test,
        isLoaded,
        index,
        handleNext,
        reset,
        handleSelect,
        res,
      }}
    >
      <Router>{children}</Router>
    </Context.Provider>
  );
};

export default Provider;
