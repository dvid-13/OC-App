import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "../styles/Styles";
import { color } from "../styles/Colors";
import { normalize } from "../styles/FontSize";
export const Input = ({ label, desc, onChangeText, inputType }) => {
  return (
    <TextInput
      mode="outlined"
      type="outlined"
      keyboardType={inputType}
      style={[styles.textInput, { fontSize: normalize(18) }]}
      selectionColor="white"
      activeOutlineColor={color.indigo_400_accent}
      color={"white"}
      label={label}
      placeholder={"Type a text"}
      theme={{ colors: styles.inputColors }}
      onChangeText={(text) => {
        onChangeText(desc, text);
      }}
    />
  );
};
