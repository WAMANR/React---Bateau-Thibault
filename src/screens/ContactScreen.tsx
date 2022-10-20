import { Text, View, ImageBackground, StyleSheet, Image, ScrollView, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen({navigation} : {navigation : any}){

    return(

        <ImageBackground source={require('../../assets/image/home-background.png')} style={styles.bgImage}>
      <ScrollView>
        <View style={{flex:1}}>
          
            
            <Header />
            <View style={{flex:2}}>
                <Text style={styles.titleText}>Contacts</Text>
            </View>
            <View style={{flex:5}}>
              <Image source={require('../../assets/image/thibault.jpg')} style={styles.image}></Image>
            </View>
            <View style={{flex:4}}>
              <Text style={styles.text1}>{`
06.63.99.99.78
lebateaudethibault@gmail.com  
www.facebook.com/lebateaudethibault
              `}
              </Text>
              <Text style={styles.text2}>{`
Qu'il est chaud le soleil
Quand nous sommes en vacances
Y'a d'la joie, des hirondelles
C'est le sud de la France
Papa bricole au garage
Maman lit dans la chaise longue
Dans ce joli paysage
Moi, je me balande en tonge

Que du bonheur!
Que du bonheur!
              `}
              </Text>
            </View>

            <View style={{flex:4}}>
              
            </View>
   

            
        </View>
        
        </ScrollView>
        </ImageBackground>
    )

    // add a background image to the home screen


}

const styles= StyleSheet.create({

    titleText:{
        textAlign : "center",
        fontSize : 30
    },
    text1:{
        textAlign : "center",
        fontSize : 20
    },
    text2:{
      textAlign : "center",
      fontSize : 15
    },
    image:{
        width : "100%",
        height : "100%",
        resizeMode : 'contain'
        
    },
    bgImage:{
        width : "100%",
        height : "100%",
        resizeMode : 'cover'
        
    },
})