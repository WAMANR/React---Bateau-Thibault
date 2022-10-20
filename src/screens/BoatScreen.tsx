import { Text, View, ImageBackground, StyleSheet, Image, ScrollView, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BoatScreen({navigation} : {navigation : any}){
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../assets/image/background.png')} resizeMode="cover" style={styles.image}>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    image:{
        width : "100%",
        height : "100%"
    }
})