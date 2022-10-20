import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ContactScreen from "./src/screens/ContactScreen";
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Sail': require('./assets/fonts/Sail-Regular.otf'),
  });
  return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false,
            gestureEnabled: true,
        }}>
            <Stack.Screen name="home" component={HomeScreen} />
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
