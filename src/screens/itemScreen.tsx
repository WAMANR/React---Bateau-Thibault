import {Text, View, ImageBackground, StyleSheet, Image, SafeAreaView} from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';



export default function ItemScreen({navigation} :{navigation : any}){
    const route = useRoute();
    let  data = require('../../assets/data/item.json');

    let res = data.filter(json => json.name = route.name )

    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../assets/image/background.png')} resizeMode="cover" style={styles.image}>
                <Header />
                <View>

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