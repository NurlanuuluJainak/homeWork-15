import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import { styled } from "styled-components";
import { CartContext } from "../../store/cart-context";

export const Basket = ({ onToggle }) => {
  const {basket,getTotalAmount} = useContext(CartContext);
  return (
    <Modal onClose={onToggle}>
      {basket.length ? (
        <FixedWidthContainer>
          {basket.map((item) => {
            if (item.amount > 0) {
              return (
                <BasketItem
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  id={item._id}
                />
              );
            }
            return null;
          })}
        </FixedWidthContainer>
      ) : null}
      <TotalAmount onClose={onToggle} totalPrice={getTotalAmount} />
    </Modal>
  );
};

const FixedWidthContainer = styled.div`
  max-height: 260px;
  overflow-y: scroll;
`;
