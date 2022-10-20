import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button";
import { AsyncStorage } from "react-native";

export default function Shop() {
  const navigation = useNavigation();
  const goToNextScreen = (url: string) => {
    navigation.navigate();
  };

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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
      quantity: 0,
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
    <View>
      {products.map((item, index) => (
        <View key={index}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.unit}</Text>
          <Text>{item.price} €</Text>
          <Text>Quantité : {item.quantity}</Text>
          <Button
            title="+"
            onPress={() => addQuantity(item.id)}
            color="green"
          />
          <Button
            title="-"
            onPress={() => removeQuantity(item.id)}
            color="red"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
