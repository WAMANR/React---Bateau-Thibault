import { Text, View, ImageBackground, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import Button from "../component/button";
import Header from '../component/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, } from '@react-navigation/native';
import { requireIcon } from "../functions/requireImage";
import { color } from "react-native-elements/dist/helpers";



export default function ItemScreen({ navigation }: { navigation: any }) {
    const route = useRoute();
    let data = require('../../assets/data/item.json');

    //get our itemList for the current page
    var res = data.filter(json => json.name === route.name);
    var itemList = res[0].item;


    const goToNextScreen = (url: string, item: any) => {
        navigation.navigate(url, item)

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={{ marginBottom: 48 }}>
                    <Text style={styles.title}>
                        {res[0].pageTitlte}
                    </Text>

                    <View style={{ marginTop: 12, alignSelf: 'center' }}>

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
                <View style={{ flex: 3 }}>
                    <View style={styles.containerItemSecondary}>
                        {
                            itemList.map((item: any) => {
                                return (
                                    <View style={styles.item}>
                                        <View style={styles.icon}>
                                            <Image style={styles.image} source={requireIcon(item.name)} />
                                        </View>
                                        <Button title={item.name} color="transparent" onPress={() => { goToNextScreen('singlePage', item) }} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 48,
        textAlign: 'center',
        fontFamily: 'Sail'
    },
    image: {
        width: "100%",
        height: "100%"
    },
    containerItemSecondary: {
        flexDirection: 'column',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    item: {
        flexDirection: 'row',
        marginBottom: 5,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 30
    },
    fontContainer: {
        flexDirection: 'row',
    },
    fontIcon: {
        marginRight: 10,
        fontSize: 16,
        color: '#485552'
    }

})