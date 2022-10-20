import { Text, View, ImageBackground, StyleSheet,Image, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";

export default function SinglePageScreen({navigation} : {navigation : any}){

    const goToNextScreen = (url:string) =>{
        navigation.navigate('contact')
    }

    let description : string = "desc";
    let titre : string = "titre de la page"
    let imgsrc : string = '../../assets/bateau-icon/aquilon2.png'
    

    return(
        <ImageBackground source={require('../../assets/image/home-background.png')} resizeMode="cover" style={style.backgroundImage}>

         <SafeAreaView style={style.container}>
            {/* <Header/> */}
                <View style={style.topView}>
                    <Text style={style.title}>{titre}</Text>
                    <Image style={style.image} source={require(imgsrc)} />
                </View>

                <View style={style.bottomView}>
                    <View>
                        <Text style= {style.desc}>XXX YYY ZZZ</Text>
                    </View>
                    <View style={{height:'100%',width:"70%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={style.desc}>
                            {description}
                        </Text>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>

    )

    // add a background image to the home screen


}

const style= StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
    },

    title:{
        fontFamily: 'Sail', fontSize:30,color:"white"
    },

    image:{
        height:'80%'
    },

    topView : {
        flex:2,
        alignItems:"center",
        width:"100%",
        height:"auto",
        justifyContent:'space-around'
    },

    bottomView: {
        flex:2,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:15
    },

    backgroundImage:{
        width : "100%",
        height : "100%"
    },

    desc:{
        textAlign:"center",
        margin:20,
        fontFamily:"Noteworthy-Bold"
    }
})

// const styles= StyleSheet.create({
//     image:{
//         width : "100%",
//         height : "100%"
//     },
//     containerItemPrimary:{
//         flexDirection:'row',
//         justifyContent: 'space-around',
//         paddingLeft:"1%",
//         paddingRight:"1%",

//     },
//     containerItemSecondary:{
//         flexDirection:'row',
//         justifyContent: 'space-around',
//         paddingLeft:"1%",
//         paddingRight:"1%",

//     },
//     containerItemHead:{
//         marginBottom:5,
//         paddingLeft:"1%",
//         paddingRight:"1%",
//         alignSelf:'center',
//         width:"98%",
//     },
//     itemHead:{
//         flexDirection:'row',
//         alignItems: 'center',
//         backgroundColor:"rgba(0,0,0,0.5)",
//         paddingTop:10,
//         paddingBottom:10,
//         paddingRight:2,
//         paddingLeft:2,

//     },
//     item:{
//         flexDirection :'row',
//         marginBottom:5,
//         width: "48%",
//         paddingTop:10,
//         paddingBottom:10,
//         paddingRight:2,
//         paddingLeft:2,
//         alignItems:'center',
//         backgroundColor:"rgba(0,0,0,0.5)"
//     },
//     icon:{
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:40,
//         backgroundColor:"red",
//         height: 40,
//         width:40,
//         marginLeft:10
//     }
// })