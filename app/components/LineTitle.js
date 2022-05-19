import React from "react";
import { View, Text } from "react-native";
export const LineTitle = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, height: 2, backgroundColor: "white" }} />
      {children}
      <View style={{ flex: 1, height: 2, backgroundColor: "white" }} />
    </View>
  );
};
