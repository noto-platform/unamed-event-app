import React from "react";
import styled from "styled-components";
import color from "open-color";

const Button = styled.div`
  position: absolute;
  z-index: 10;
  width: 60px;
  height: 60px;
  bottom: 60px;
  right: 60px;
  color: ${color.gray[9]};
  font-size: 24px;
  opacity: .9;
  background: ${color.gray[0]};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.1s ease;
`;

const FloatingActionButton = ({ text, onClick, positionBottom }) =>
  <Button onClick={onClick} style={{ bottom: `${positionBottom || 60}px` }}>
    {text}
  </Button>;

export default FloatingActionButton;
