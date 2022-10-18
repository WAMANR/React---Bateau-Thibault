import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


export interface ButtonProps {
    title: string;
    //on click redirect to the contact screen
    onPress: () => void,
    color:string
}

export default function Button({ title, onPress, color = "" }: ButtonProps) {
    return (
        <TouchableOpacity onPress={
            onPress
        } style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button :{

    },
    buttonText: {
        color: "white",
        paddingLeft: 5,
        paddingRight: 5
    }
});