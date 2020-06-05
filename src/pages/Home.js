import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import Header from "../components/Header";
import Context from "../contexts/Context";
import data from "../data/data";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
`;

const Home = () => {
  const { handleClick } = useContext(Context);
  return (
    <Fragment>
      <Header>QuizUp</Header>
      <Wrapper>
        {data.allCategories.map((categ, index) => {
          const category = data.categories[categ];
          return (
            <Link to="/test" key={index}>
              <Category
                img={category.img}
                category={category.title}
                onClick={() => handleClick(category.value)}
              />
            </Link>
          );
        })}
      </Wrapper>
    </Fragment>
  );
};

export default Home;
