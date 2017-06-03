import React, { PropTypes } from "react";

// TODO Style as a popup/modal
// Shall we add modal, button and other common components in sub folder common?

const Modal = ({ onConfirm, onCancel, item, children }) => {
  const handleCancel = () => onCancel(null);
  const handleConfirm = () => onConfirm(item);

  return (
    <div>
      {children}
      <div>
        <button onClick={onConfirm}>Ok</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
