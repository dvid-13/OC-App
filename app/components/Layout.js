import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "../styles/Styles";

const Layout = ({ children }) => {
  return (
    <View style={styles.layout}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

export default Layout;
