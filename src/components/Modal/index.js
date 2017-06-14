import React, { PropTypes } from "react";
import { View } from "react-primitives";

// TODO Style as a popup/modal
// Shall we add modal, button and other common components in sub folder common?

const Modal = ({ onConfirm, onCancel, item, children }) => {
  const handleCancel = () => onCancel(null);
  const handleConfirm = () => onConfirm(item);

  return (
    <View>
      {children}
      <View>
        <View onClick={onConfirm}>Ok</View>
        <View onClick={handleCancel}>Cancel</View>
      </View>
    </View>
  );
};

export default Modal;
