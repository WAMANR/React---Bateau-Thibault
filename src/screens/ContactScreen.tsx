import { Text, View, ImageBackground, StyleSheet, Image, ScrollView, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
    

export default function ContactScreen({navigation} : {navigation : any}){

    return(
    
        <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/image/home-background.png')} style={styles.bgImage}>
        <Header />
        <View style={{flex:1}}>
        
        <ScrollView>
            <View style={{ padding:20}}>
                <Text style={styles.titleText}>Contacts</Text>
            </View>
            <View>
              <Image source={require('../../assets/image/thibault.jpg')} style={styles.image}></Image>
            </View>
            <View style={{flex:4}}>
              <Text style={styles.text1}>
                {"\n"}06.63.99.99.78
                {"\n"}lebateaudethibault@gmail.com  
                {"\n"}www.facebook.com/lebateaudethibault
              </Text>
              <Text style={styles.text2}>
                {"\n"}Qu'il est chaud le soleil
                {"\n"}Quand nous sommes en vacances
                {"\n"}Y'a d'la joie, des hirondelles
                {"\n"}C'est le sud de la France
                {"\n"}Papa bricole au garage
                {"\n"}Maman lit dans la chaise longue
                {"\n"}Dans ce joli paysage
                {"\n"}Moi, je me balande en tonge
                {"\n"}Que du bonheur!
                {"\n"}Que du bonheur!
              </Text>
            </View>   
            </ScrollView>       
        </View>
        </ImageBackground>
        </SafeAreaView>   
    )

    // add a background image to the home screen


}

const styles= StyleSheet.create({

    titleText:{
        textAlign : "center",
        fontSize : 30,
        fontFamily: 'Sail'
    },
    text1:{
        textAlign : "center",
        fontSize : 20,
        fontFamily: 'Sail'
    },
    text2:{
      textAlign : "center",
      fontSize : 15,
      padding : 20,
      fontFamily: 'Sail'
    },
    image:{
        width : "100%",
        height : 200,
        resizeMode : 'contain'
        
    },
    bgImage:{
        width : "100%",
        height : "100%",
        resizeMode : 'cover'
        
    },
})