import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button";
import { AsyncStorage } from "react-native";
import Header from "../component/header";

export default function ShopScreen({navigation} : {navigation : any}){

  const allItems = [
    {
      id: 12,
      name: "Aile de raie",
      category: 0,
      price: 10.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Pêche à la corde",
      owner: "tig",
      quantity: 0
    },
    {
      id: 9,
      name: "Araignées",
      category: 2,
      price: 7.0,
      unit: "kg",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Hors saison,  pêche aux casiers",
      owner: "tig",
      quantity: 0
    },
    {
      id: 3,
      name: "Bar de ligne",
      category: 0,
      price: 30.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Plus de 1.5kg le poisson",
      owner: "tig",
      quantity: 0
    },
    {
      id: 2,
      name: "Bar de ligne portion",
      category: 0,
      price: 10.0,
      unit: "pièce",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Environ 550-700g la pièce",
      owner: "tig",
      quantity: 0
    },
    {
      id: 10,
      name: "Bouquets cuits",
      category: 1,
      price: 8.0,
      unit: "100g",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Hors saison, pêche à l'épuisette",
      owner: "tig",
      quantity: 0
    },
    {
      id: 1,
      name: "Filet Bar de ligne",
      category: 0,
      price: 7.0,
      unit: "2 filets",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "environ 300g",
      owner: "tig",
      quantity: 0
    },

    {
      id: 5,
      name: "Filet Julienne",
      category: 0,
      price: 19.0,
      unit: "kg",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Pêche à la corde",
      owner: "tig",
      quantity: 0
    },
    {
      id: 7,
      name: "Huitres N°2 St Vaast",
      category: 1,
      price: 9.5,
      unit: "Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      quantity: 0
    },
    {
      id: 8,
      name: "Huitres N°2 St Vaast",
      category: 1,
      price: 38.0,
      unit: "4 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      quantity: 0
    },
    {
      id: 13,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 12.0,
      unit: "Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or Salon Agriculture",
      owner: "tig",
      quantity: 0
    },
    {
      id: 14,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 24.0,
      unit: "2 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: "tig",
      quantity: 0
    },
    {
      id: 15,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 48.0,
      unit: "4 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: "tig",
      quantity: 0
    },
    {
      id: 16,
      name: "Huîtres N°2 St Vaast",
      category: 1,
      price: 19.0,
      unit: "2 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      quantity: 0
    },
    {
      id: 4,
      name: "Lieu jaune de ligne",
      category: 0,
      price: 12.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Environ 550-700g la portion",
      owner: "tig",
      quantity: 0
    },
    {
      id: 6,
      name: "Moules de pêche",
      category: 1,
      price: 7.0,
      unit: "kg",
      availability: true,
      sale: true,
      discount: 5.0,
      comments: "",
      owner: "tig",
      quantity: 0
    },
  ];

  //create use state for the products
  const [products, setProducts] = useState(allItems);
  const [quantity, setQuantity] = useState<number>(1);
  const [item, setItem] = useState(null);


  // add quantity for the product 
  const addQuantity = async (id) => {
    AsyncStorage.getItem("cart").then((cart) => {
      const cartItems = JSON.parse(cart);
      const product = cartItems.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
      } else {
        const product = allItems.find((item) => item.id === id);
        product.quantity = 1;
        cartItems.push(product);
      }
      AsyncStorage.setItem("cart", JSON.stringify(cartItems)).then(() => {
        setProducts(cartItems);
      });
    }).catch((err) => {
      console.log(err);
      AsyncStorage.setItem("cart", JSON.stringify([])).then(() => {
        setProducts([]);
        console.log("error", err);
      });
    });

  };

  // remove quantity for the product
  const removeQuantity = (id) => {
    AsyncStorage.getItem("cart").then((cart) => {
      const cartItems = JSON.parse(cart);
      const product = cartItems.find((item) => item.id === id);
      if (product) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          const index = cartItems.indexOf(product);
          cartItems.splice(index, 1);
        }
      }
      AsyncStorage.setItem("cart", JSON.stringify(cartItems)).then(() => {
        setProducts(cartItems);
      });
    }).catch((err) => {
      console.log(err);
      AsyncStorage.setItem("cart", JSON.stringify([])).then(() => {
        setProducts([]);
        console.log("error", err);
      });
    });

  }
  
  return (
    <View style={{backgroundColor:"#EFEDED"}}>
      <Header></Header>
      {products.map((item, index) => (
        <ScrollView>
          <View style={{ borderRadius: 15 }}>
            <Card key={index} style={{ borderColor: "black", borderRadius: 20, margin: 5 }}>
              <Card.Title title={item.name} subtitle={item.comments} />
              <Card.Content>
                <Text>{item.price} €/{item.unit}</Text>
              </Card.Content>
              <Card.Actions style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
                <Button title="+" color="#2D682B" onPress={() => addQuantity(item.id)}>Add</Button>
                <Button title={item.quantity.toString()} color="#CABCBC">{item.quantity}</Button>
                <Button title="-" color="#AF2222" onPress={() => removeQuantity(item.id)}>Remove</Button>
              </Card.Actions>
            </Card>
          </View>
        </ScrollView>
      ))}
    </View>
  );
}