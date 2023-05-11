import React from "react";
import styled from "styled-components";

export const TotalAmount = ({ onClose, onOrder, totalPrice }) => {
  const isOrderButton =
    totalPrice > 0 ? (
      <ButtonTotlaAmountOrder onClick={onOrder}>Order</ButtonTotlaAmountOrder>
    ) : null;

  return (
    <Container>
      <TextContaner>
        <h3>Total Price</h3>
        <h4>${totalPrice.toFixed(2)}</h4>
      </TextContaner>
      <ButtonContainer>
        <ButtonTotlaAmountClose onClick={onClose}>Close</ButtonTotlaAmountClose>
        {isOrderButton}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 30px;
`;

const TextContaner = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin: 0;
  }

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;

const ButtonTotlaAmountOrder = styled.button`
  width: 110px;
  height: 44px;
  background: #8a2b06;
  border-radius: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border: none;

  &:hover {
    background: #7e2a0a;
  }
  &:active {
    background: #993108;
  }
`;
const ButtonTotlaAmountClose = styled.button`
  width: 110px;
  height: 44px;
  background: #fff;
  border-radius: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8a2b06;
  border: none;
  border: 1px solid #8a2b06;

  &:hover {
    background: #8a2b06;
    color: #fff;
  }
  &:active {
    background: #993108;
    color: #fff;
  }
`;
