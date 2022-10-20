import { Text, View} from "react-native";
import Button from "../component/button";

export default function ShopScreen({navigation} : {navigation : any}){

    const goToHome = () =>{
        navigation.navigate('home')
    }
    return(
        <View>
            <View>
                <Button title="go to" onPress={goToHome} />
            </View>
        </View>
    )

    // add a background image to the home screen


}