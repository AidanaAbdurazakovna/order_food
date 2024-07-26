import React, { useState } from "react";
// import { ReactComponent as PlusIcon } from "../../assets/icons/btnPlus.svg";
import styled from "styled-components";
import Button from "../UI/Buttton";
import plus from "../../assets/icons/plus.svg";

export const MealItemForm = ({ inputId, onAdd }) => {
  const [amount, setAmount] = useState(1);
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const addNewMeal=()=>{
    onAdd(amount)
    setAmount(1)
  }

  return (
    <Container>
      <InputBlock>
        <label htmlFor={inputId}>Amount </label>
        <input
          value={amount}
          onChange={changeHandler}
          type="number"
          id={inputId}
          min={1}
        />
      </InputBlock>
      <Button onClick={addNewMeal}>
        <img src={plus} alt="increment" /> Add
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const InputBlock = styled.div`
  margin-bottom: 12px;
  label {
    font-size: 18px;
    color: #222222;
    margin-right: 20px;
    font-weight: 600;
  }
  input {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
  }
`;
