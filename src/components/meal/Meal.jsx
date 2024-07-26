import React from "react";
import { MealItem } from "./MealItem";
import styled from "styled-components";
import { PRODUCT } from "../../utils/constants";

const Meal = () => {
  return (
    <StyledSection>
      <ul>
        {PRODUCT.map((item) => (
          <MealItem
            key={item.id}
            discription={item.discription}
            title={item.title}
            price={item.price}
            id={item.id}
          ></MealItem>
        ))}
      </ul>
    </StyledSection>
  );
};

export default Meal;
const StyledSection = styled.section`
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
  ul {
    list-style: none;
  }
`;
