import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ContactScreen from "./src/screens/ContactScreen";
import SinglePageScreen from "./src/screens/SinglePageScreen"
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stack = createNativeStackNavigator();

import * as React from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Sail': require('./assets/Fonts/Sail-Regular.otf'),
    'Noteworthy-Lt' : require('./assets/Fonts/Noteworthy-Lt.ttf'),
    'Noteworthy-Bold' : require('./assets/Fonts/Noteworthy-Bold.ttf')
  });

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={HomeScreen}/>
            <Stack.Screen name="contact" component={ContactScreen} />
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
