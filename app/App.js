import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles/Styles";
import { color } from "./styles/Colors";
import HomeScreen from "./screens/Homescreen";
import FormScreen from "./screens/FormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.simpleBG}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ navigation, route }) => ({
              title: "BJG",
              headerTitleStyle: {
                color: color.indigo_50,
              },
              headerStyle: {
                backgroundColor: color.dark_blue,
              },
            })}
          />
          <Stack.Screen
            name="FormScreen"
            component={FormScreen}
            options={({ navigation, route }) => ({
              title: "Crear",
              headerTitleStyle: {
                color: color.indigo_50,
              },
              headerTintColor: color.indigo_50,
              headerStyle: {
                backgroundColor: "#222f3e",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
