import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


export interface ButtonProps {
    title: string;
    //on click redirect to the contact screen
    onPress: () => void;
}

export default function Button({ title, onPress, color = "blue" }: ButtonProps) {
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
    buttonText:{

    }
});