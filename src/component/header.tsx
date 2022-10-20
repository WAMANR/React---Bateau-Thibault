import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button";

export default function Header() {
  const navigation = useNavigation();
  const goToNextScreen = (url: string) => {
    navigation.navigate(url);
  };

  return (
    <View>
      <Button
        title="Basket"
        onPress={() => goToNextScreen("basket")}
        color="#000"

      />
      <Button
        title="Home"
        onPress={() => goToNextScreen("home")}
        color="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  itemCount: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },
  button: {
    position: "relative",
  },
});
