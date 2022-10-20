import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button";
import { AsyncStorage } from "react-native";
import Header from "../component/header";

export default function Basket() {
    const navigation = useNavigation();
    const goToNextScreen = (url: string) => {
        navigation.navigate();
    }

    const [basket, setBasket] = useState([]);

    // get basket from local storage and set it to basket state
    useEffect(() => {
        AsyncStorage.getItem("cart").then((basket) => {
            if (basket) {
                setBasket(JSON.parse(basket));
            }
            console.log(basket);
        });
    }, []);


    

    return (
        <View>
            <Header></Header>
             {
                // only display if the basket item quantity is greater than 0
                basket.map((item : any) => {
                    if (item.quantity  > 0) {
                        return (
                            <View style={styles.item}>
                                <Text>Name :{item.name}</Text>
                                <Text>Quantity : {item.quantity}</Text>
                                <Text>Price : {item.price * item.quantity}</Text>
                            </View>
                        );
                    }
                }
                )
             }
        </View>
    );
}

const styles = StyleSheet.create({
    item : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    }
});



    