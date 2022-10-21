import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ContactScreen from "./src/screens/ContactScreen";
import { useFonts } from 'expo-font';
import Basket from "./src/screens/BasketScreen";
import Shop from './src/screens/ShopScreen';
import { AsyncStorage } from 'react-native';


import SinglePageScreen from "./src/screens/SinglePageScreen"
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stack = createNativeStackNavigator();

import * as React from 'react';
import * as Font from 'expo-font';

import ItemScreen from "./src/screens/itemScreen";



export default function App() {

  try {
    AsyncStorage.getItem('cart').then((value) => {
      console.log(value);
    }).catch((error) => {
      console.log(error);
      AsyncStorage.setItem('cart', JSON.stringify([])).then((value) => {
        console.log(value);
      }).catch((error) => {
        console.log(error);
      });
    })
  }catch(e){
    console.log(e);
  }

  const [fontsLoaded] = useFonts({
    'Sail': require('./assets/Fonts/Sail-Regular.ttf'),
    'Noteworthy-Lt' : require('./assets/Fonts/Noteworthy-Lt.ttf'),
    'Noteworthy-Bold' : require('./assets/Fonts/Noteworthy-Bold.ttf')
  });

  return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false,
            gestureEnabled: true,
        }}>
            <Stack.Screen name="home" component={HomeScreen} />

            <Stack.Screen name="contact" component={ContactScreen} />
            <Stack.Screen name="products" component={Shop} />
            <Stack.Screen name="basket" component={Basket} />
            <Stack.Screen name="bateaux" component={ItemScreen} />
            <Stack.Screen name="recette" component={ItemScreen} />
            <Stack.Screen name="restaurants" component={ItemScreen} />
            <Stack.Screen name="singlePage" component={SinglePageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
