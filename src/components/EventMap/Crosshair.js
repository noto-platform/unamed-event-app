import React from "react";
import styled from "styled-components";
import color from "open-color";

console.log(color);
const Container = styled.div`
  position: absolute;
  pointer-events: none;
  height: 50vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.1s ease;
`;

const Point = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid ${color.gray[7]};
  background: rgba(0,0,0,.3);
  border-radius: 50%;
`;

const Crosshair = ({ position }) =>
  <Container style={{ height: `${window.innerHeight - position}px` }}>
    <Point />
  </Container>;

export default Crosshair;
