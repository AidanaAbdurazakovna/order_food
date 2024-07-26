import React from "react";
import mealsBannerImage from "../../assets/images/mealsImageBanner.png";
import styled from "styled-components";

const MealsSummary = () => {
  return (
    <section>
      <PrepperImage>
        <img src={mealsBannerImage} alt="backdrop" />
      </PrepperImage>
      <MealsSummaryContainer>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </MealsSummaryContainer>
    </section>
  );
};

export default MealsSummary;
const PrepperImage = styled.div`
  img {
    width: 100%;
    /* height: 25rem; */
  }
`;
const MealsSummaryContainer = styled.div`
  text-align: center;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;
  background-color: #383838;
  color: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0px 6px 16px 0px #0000004d;
  margin-top: -6rem;
  position: relative;

  & > h2 {
    font-size: 2rem;
  }
`;
