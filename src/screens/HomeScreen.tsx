import {Text, View, ImageBackground, StyleSheet, Image, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation} : {navigation : any}){

    const goToNextScreen = (url:string) =>{
        navigation.navigate(url)
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../assets/image/background.png')} resizeMode="cover" style={styles.image}>
            <Header />
            <View style={{flex:3}}>

                <View style={{alignSelf:'center',marginTop:48}}>
                    <Text style={styles.title}>Vente en direct de notre bateau </Text>
                    <Text style={styles.title}>Produit selon la saison, livraison sur Paris </Text>
                    <View style={{marginTop:12}}>

                        <View style={styles.fontContainer}>
                            <Ionicons style={styles.fontIcon} name="call"></Ionicons>
                            <Text>06.63.99.99.78</Text>
                        </View>

                        <View style={styles.fontContainer}>
                            <MaterialCommunityIcons style={styles.fontIcon} name="email-edit"></MaterialCommunityIcons>
                            <Text>lebateau dethibault@gmail.com</Text>
                        </View>

                        <View style={styles.fontContainer}>
                            <Ionicons style={styles.fontIcon} name="logo-facebook"></Ionicons>
                            <Text>www.facebook.com/lebateaudethibault</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={{flex: 2}}>
                <View style={styles.containerItemHead}>

                    <View style={styles.itemHead}>
                        <View style={styles.icon}>
                            <Image style={styles.image} source={require('../../assets/icon/poisson.png')}  />
                        </View>
                        <Button title="Produits et promotions" color="transparent"  onPress={()=>{navigation.navigate('products')}}  />
                    </View>

                </View>

                <View style={styles.containerItemPrimary}>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Image style={styles.image} source={require('../../assets/icon/ancre.png')}  />
                        </View>
                        <Button title="Bâteaux" color="transparent"  onPress={()=>{goToNextScreen('bateaux')}}  />
                    </View>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Image style={styles.image} source={require('../../assets/icon/restaurant.png')}  />
                        </View>
                        <Button title="Restaurants" color="transparent"  onPress={()=>{navigation.navigate('restaurants')}}  />
                    </View>

                </View>

                <View style={styles.containerItemSecondary}>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Image style={styles.image} source={require('../../assets/icon/recette.png')}  />
                        </View>
                        <Button title="Recettes" color="transparent"  onPress={()=>{navigation.navigate('recette')}}  />
                    </View>

                    <View style={styles.item}>
                        <View style={styles.icon}>
                            <Image style={styles.image} source={require('../../assets/icon/tourteau.png')}  />
                        </View>
                        <Button title="Contact" color="transparent"  onPress={()=>{goToNextScreen('contact')}}  />
                    </View>

                </View>

            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    title:{
        fontSize:16,
        textAlign:'center',
        fontWeight : "bold",
        marginBottom:5
    },
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
        backgroundColor:"rgba(0,0,0,0.3)",
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
        backgroundColor:"rgba(0,0,0,0.3)"
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
    },
    fontContainer:{
        flexDirection: 'row',
    },
    fontIcon:{
        marginRight:10,
        fontSize:16,
        color:'#485552'
    }
})