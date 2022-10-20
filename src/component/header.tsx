import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
    const navigation = useNavigation();
    const goToNextScreen = (url: string) => {
        navigation.navigate(url);
    };
    
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => goToNextScreen("home")}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/image/app-logo.png")}
                ></Image>
            </TouchableOpacity>
            <Text style={{fontFamily:'Sail'}}>Le bateau de Thibault</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => goToNextScreen("basket")}
            >
                <AntDesign style={{paddingRight:10, paddingTop:8}} name="shoppingcart" size={24} color="black" />
                <Text style={styles.itemCount}>1</Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    header: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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