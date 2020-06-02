import React from "react";
import Context from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

const Provider = ({ children }) => {
  return (
    <Context.Provider>
      <Router>{children}</Router>
    </Context.Provider>
  );
};

export default Provider;
