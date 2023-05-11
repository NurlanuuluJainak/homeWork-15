import React, { useState } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";

export const MealItemForm = ({ onAdd, inputId }) => {
  const [amount, setAmount] = useState(1);

  function changeHandler(e) {
    setAmount(e.target.value);
  }

  function addItemHandler() {
    onAdd(amount);
  }

  return (
    <div>
      <InputBlock>
        <label htmlFor={inputId}>Amount</label>
        <input
          value={amount}
          onChange={changeHandler}
          type="number"
          id={inputId}
          min={1}
        />
      </InputBlock>
      <Button onClick={addItemHandler}>
        <ButtonSpan>+ ADD</ButtonSpan>
      </Button>
    </div>
  );
};

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

const ButtonSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
