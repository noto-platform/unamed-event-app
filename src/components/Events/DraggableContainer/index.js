import React, { PropTypes } from "react";
import "./index.css";
import styled from "styled-components";
import DraggableInteractions from "containers/DraggableInteractions";

const DraggableContainer = ({
  fullPageEnabled,
  positionBottom,
  setPosition,
  children
}) => {
  const handleMobileKeyboard = () => setPosition(window.innerHeight / 4);

  return (
    <div
      className="event__wrapper event__wrapper--animate"
      id="wrapper"
      style={{ bottom: `${positionBottom}px` }}
      onFocus={handleMobileKeyboard}
    >
      {children}
    </div>
  );
};

export default DraggableInteractions(DraggableContainer);
