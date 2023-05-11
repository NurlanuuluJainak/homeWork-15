import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent } from "../../assats/icons/Group.svg";
import { CartContext } from "../../store/cart-context";
export const OrderBasket = ({ children, onClick }) => {
  const context = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState('')
  useEffect(() => {
    setAnimationClass('bump')
    const id = setTimeout(() => {
      setAnimationClass("")
    }, 300);
    return () => {
      clearTimeout(id)
    }
  },[context.addItemToCartHandler])
  return (
    <Button className={animationClass} onClick={onClick}>
      <ReactComponent /> <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{context.totalAmount}</OrderBasketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bump 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #4d1601;
  }

  &.bump{
    animation: bump 300ms ease-out;
  }


  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const OrderBasketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;
const OrderBasketCount = styled.span`
  padding: 4px 13px;
  background: #8a2b06;
  border-radius: 30px;
  color: #fff;
`;
