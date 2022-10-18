import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
    const navigation = useNavigation();
    const goToNextScreen = (url: string) => {
        navigation.navigate();
    };

    return (
        <View>
            <TouchableOpacity onPress={() => goToNextScreen("home")}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/icon.png")}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => goToNextScreen("basket")}
            >
                <AntDesign name="shoppingcart" size={24} color="black" />
                <Text style={styles.itemCount}>1</Text>
            </TouchableOpacity>
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