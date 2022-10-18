import {Button, Text, View} from "react-native";





export default function HomeScreen({navigation} : {navigation : any}){

    const goToNextScreen = () =>{
        navigation.navigate('contact')
    }
    return(
        <View>
            <Text>Home page</Text>
            <View>
                <Button title="go to" onPress={goToNextScreen} />
            </View>
        </View>
    )

}