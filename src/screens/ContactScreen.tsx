import { Text, View, ImageBackground, StyleSheet, Image, ScrollView, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
    

export default function ContactScreen({navigation} : {navigation : any}){

    return(
    
    <ImageBackground source={require('../../assets/image/home-background.png')} style={styles.bgImage}>
        <SafeAreaView style={{flex:1}}>
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
                <br/>06.63.99.99.78
                <br/>lebateaudethibault@gmail.com  
                <br/>www.facebook.com/lebateaudethibault
              </Text>
              <Text style={styles.text2}>
                <br/>Qu'il est chaud le soleil
                <br/>Quand nous sommes en vacances
                <br/>Y'a d'la joie, des hirondelles
                <br/>C'est le sud de la France
                <br/>Papa bricole au garage
                <br/>Maman lit dans la chaise longue
                <br/>Dans ce joli paysage
                <br/>Moi, je me balande en tonge
                <br/><br/>Que du bonheur!
                <br/>Que du bonheur!
              </Text>
            </View>   
            </ScrollView>       
        </View>
        </SafeAreaView>   
    </ImageBackground>
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