import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ToastAndroid, SafeAreaView, ImageBackground } from "react-native";

import { Card, ListItem, Icon } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button";
import { AsyncStorage } from "react-native";
import Header from "../component/header";

export default function Basket() {
  const navigation = useNavigation();
  const goToNextScreen = (url: string) => {
    navigation.navigate();
  };

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

  const restaurants = [
    "Bistrot des Gascons",
    "Les Fous de l'Île",
    "Bistrot Landais",
    "Villa 9-Trois",
    "Bistrot du Sommelier",
  ];

  return (
    <SafeAreaView>
      <ImageBackground source={require('../../assets/image/background.png')} style={styles.bgImage}>
        <Header></Header>

        <Card>
          <Card.Title> Title</Card.Title>

          {
            // only display if the basket item quantity is greater than 0
            basket.map((item: any) => {
              if (item.quantity > 0) {
                return (
                  <Card.Divider>
                    <View>
                      <Text style={{ marginBottom: 10 }}>
                        {item.quantity} {item.unit}
                      </Text>
                      <Text>{item.comments}</Text>
                      <Text style={{ marginBottom: 10 }}>
                        {item.price * item.quantity} €
                      </Text>
                    </View>
                  </Card.Divider>
                );
              }
            })
          }
        </Card>
        <Card>
          <Card.Title>Total price : </Card.Title>
          <Card.Divider>
            <View>
              <Text style={{ marginBottom: 10 }}>
                Total price :{" "}
                {
                  // calculate the total price of the basket
                  basket.reduce((acc: any, item: any) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                }{" "}
                €
              </Text>
            </View>
          </Card.Divider>
        </Card>

        <Card>
          <Card.Title>
            Please chose a restaurant to deliver your order :
          </Card.Title>
          <View>
            <SelectDropdown
              data={restaurants}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                ToastAndroid.showWithGravity(
                  "Submitted : " + selectedItem,
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                );

                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
        </Card>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});
