import React, { PropTypes } from "react";
import { StyleSheet } from "react-primitives";

export const TextInput = ({ multiline, ...props }) =>
  multiline ? <textarea {...props} rows /> : <input {...props} />;

export default TextInput;
