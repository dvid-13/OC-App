import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/Styles";
import { normalize } from "..//styles/FontSize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../styles/Colors";

export const Item = ({
  item,
  backgroundColor,
  onPress,
  onLongPress,
  onPressIcon,
}) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={[styles.frameItem, backgroundColor]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[styles.text, { fontSize: normalize(18) }]}>
          {item.name + " - " + item.company}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.frameIcon, { backgroundColor: color.amber_400 }]}
        onPress={onPressIcon}
      >
        <MaterialCommunityIcons name="credit-card-plus-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};
