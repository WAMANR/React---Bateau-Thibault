import { Text, View, ImageBackground, StyleSheet,Image, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import {FontAwesome} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import {useNavigation, useRoute} from "@react-navigation/native";
import {requireImage} from "../functions/requireImage";
 
export default function SinglePageScreen(){
    const route=useRoute();
    const navigation = useNavigation();

    const goToNextScreen = (url:string) =>{
        navigation.navigate(url)
    }

    let description : string = "desc";
    let titre : string = "titre de la page"
    let imgsrc : string = '../../assets/bateau-icon/aquilon_icon.png'

    var item  = route.params;

    return(
         <SafeAreaView style={style.container}>
         <ImageBackground source={require('../../assets/image/background.png')} resizeMode="cover" style={style.backgroundImage}>
         <Header/>
            {/* <Header/> */}
                <View style={style.topView}>
                    <Text style={style.title}>{item.completeName}</Text>
                    <Image style={style.image} source={requireImage(item.name)} />
                </View>

                <View style={style.bottomView}>
                    <View>
                        <Text style= {style.desc}>XXX YYY ZZZ</Text>
                    </View>
                    <View style={{height:'100%',width:"70%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={style.desc}>
                            {item.description}
                        </Text>
                    </View>
                </View>
                </ImageBackground>
            </SafeAreaView>

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
        height:'80%',
        width: '100%'
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