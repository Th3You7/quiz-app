import React from "react";
import styled from "styled-components";
import data from "./data/data";
import Header from "./components/Header";
import Category from "./components/Category";
import "./app.css";

const Wrapper = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
`;

function App() {
  return (
    <div className="app">
      <Header />
      <Wrapper>
        {data.allCategories.map((categ, index) => {
          const category = data.categories[categ];
          return (
            <Category
              category={category.title}
              img={category.img}
              key={index}
            />
          );
        })}
      </Wrapper>
    </div>
  );
}

export default App;
