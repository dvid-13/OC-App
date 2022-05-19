import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import { normalize } from "../styles/FontSize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../styles/Colors";

export const ItemData = ({ item, onPress, onPressIcon }) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity style={styles.frameItem} onPress={onPress}>
        <View style={[styles.row, { alignItems: "center" }]}>
          <Text style={[styles.text, { fontSize: normalize(18) }]}>
            {item.description + ": "}
          </Text>
          <Text style={[styles.text, { fontSize: normalize(18) }]}>
            {item.cost}
          </Text>
          <MaterialCommunityIcons name={item.icon} size={25} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.frameIcon, { backgroundColor: color.red_400 }]}
        onPress={onPressIcon}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={32}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};
