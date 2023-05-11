import React from "react";
import { styled } from "styled-components";
import { backdropElement, modalElement } from "../../utils/Constanr";
import { createPortal } from "react-dom";

export const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};
export const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

export const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, backdropElement)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalElement)}
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
`;
const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  width: 40rem;
  left: calc(50% - 20rem);
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
