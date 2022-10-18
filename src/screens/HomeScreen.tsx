import { Text, View, ImageBackground, StyleSheet} from "react-native";
import Button from "../component/button";
import image from '../../assets/image/home-background.png';
import Header from "../component/Header";


export default function HomeScreen({navigation} : {navigation : any}){

    const goToNextScreen = (url:string) =>{
        navigation.navigate('contact')
    }

    return(
        <View style={{flex:1}}>
            <Header></Header>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={{flex:2}}>
                <Text>Le bateau de Thibault</Text>
            </View>

            <View style={{flex:1}}>
                <View>
                    <Button title="Produits et promotions" color="rgba(0,0,0,0.5"  onPress={()=>{navigation.navigate('products')}}  />
                </View>
                <View>
                    <Button title="Bâteaux" color="rgba(0,0,0,0.5"  onPress={()=>{goToNextScreen('bateaux')}}  />
                </View>
                <View>
                    <Button title="Restaurants" color="rgba(0,0,0,0.5"  onPress={()=>{navigation.navigate('restaurants')}}  />
                </View>
                <View>
                    <Button title="Recettes" color="rgba(0,0,0,0.5"  onPress={()=>{navigation.navigate('recette')}}  />
                </View>
                <View>
                    <Button title="Contact" color="rgba(0,0,0,0.5"  onPress={()=>{goToNextScreen('bateaux')}}  />
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
    }
})