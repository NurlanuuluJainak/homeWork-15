import styled from "styled-components";
export const Button = (props) => {
  return (
    <div>
      <Buttons
        className={props.className}
        onSubmit={props.onSubmit}
        onClick={props.onClick}
      >
        {props.children}
      </Buttons>
    </div>
  );
};
const Buttons = styled.button`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  border-radius: 20px;
  border-style: none;
  &:hover {
    background-color: #4d1601;
    cursor: pointer;
  }
  &:active {
    background-color: #993108;
  }
`;
