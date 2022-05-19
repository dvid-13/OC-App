import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import { normalize } from "../styles/FontSize";

const FrameOc = ({ onPress, text1, text2, num, ...props }) => {
  return (
    <TouchableOpacity style={styles.frameElement} onPress={onPress}>
      <View style={[{ backgroundColor: "rgba(0,0,0, 0)" }, styles.row]}>
        <View>
          <Text style={[styles.text, { fontSize: normalize(24) }]}>
            {text1}
          </Text>
          <Text style={[styles.text, { fontSize: normalize(24) }]}>
            {text2}
          </Text>
        </View>
        <Text style={[styles.text, { fontSize: normalize(50) }]}> {num}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default FrameOc;
