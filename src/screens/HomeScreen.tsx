import { Text, View} from "react-native";
import Button from "../component/button";

export default function HomeScreen({navigation} : {navigation : any}){

    const goToNextScreen = () =>{
        navigation.navigate('contact')
    }
    return(
        <View>
            <View>
                <Button title="go to" onPress={goToNextScreen} />
            </View>
        </View>
    )

    // add a background image to the home screen


}