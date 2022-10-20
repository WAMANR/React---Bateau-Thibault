import { Text, View, ImageBackground, StyleSheet} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation} : {navigation : any}){

    const goToNextScreen = (url:string) =>{
        navigation.navigate('contact')
    }

    return(
        <View style={{flex:1}}>

            <ImageBackground source={require('../../assets/image/home-background.png')} resizeMode="cover" style={styles.image}>
            <Header />
            <View style={{flex:3}}>
                <Text>Le bateau de Thibault</Text>
            </View>

            <View style={{flex: 2}}>
                <View style={styles.containerItemHead}>

                    <View style={styles.itemHead}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons size={30} name="fish"  />
                        </View>
                        <Button title="Produits et promotions" color="transparent"  onPress={()=>{navigation.navigate('products')}}  />
                    </View>

                </View>

                <View style={styles.containerItemPrimary}>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <FontAwesome size={30} name="anchor" style={{rotation:45}}  />
                        </View>
                        <Button title="Bâteaux" color="transparent"  onPress={()=>{goToNextScreen('bateaux')}}  />
                    </View>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Ionicons size={30} name="restaurant"  />
                        </View>
                        <Button title="Restaurants" color="transparent"  onPress={()=>{navigation.navigate('restaurants')}}  />
                    </View>

                </View>

                <View style={styles.containerItemSecondary}>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Ionicons size={30} name="restaurant"  />
                        </View>
                        <Button title="Recettes" color="transparent"  onPress={()=>{navigation.navigate('recette')}}  />
                    </View>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <FontAwesome size={30} name="home"  />
                        </View>
                        <Button title="Contact" color="transparent"  onPress={()=>{goToNextScreen('bateaux')}}  />
                    </View>

                </View>

            </View>

            </ImageBackground>
        </View>
    )

    // add a background image to the home screen


}

const styles= StyleSheet.create({
    image:{
        width : "100%",
        height : "100%"
    },
    containerItemPrimary:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingLeft:"1%",
        paddingRight:"1%",

    },
    containerItemSecondary:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingLeft:"1%",
        paddingRight:"1%",

    },
    containerItemHead:{
        marginBottom:5,
        paddingLeft:"1%",
        paddingRight:"1%",
        alignSelf:'center',
        width:"98%",
    },
    itemHead:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingTop:10,
        paddingBottom:10,
        paddingRight:2,
        paddingLeft:2,

    },
    item:{
        flexDirection :'row',
        marginBottom:5,
        width: "48%",
        paddingTop:10,
        paddingBottom:10,
        paddingRight:2,
        paddingLeft:2,
        alignItems:'center',
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    icon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        backgroundColor:"red",
        height: 40,
        width:40,
        marginLeft:10
    }
})