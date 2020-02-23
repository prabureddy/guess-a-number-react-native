import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Color from "../constants/Color";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.primary,
    marginVertical: 10
  }
});

export default Input;
