import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function Home() {
    const handleStart = () => {
        router.navigate("cart");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleStart()}>
                <Text style={styles.buttonText}>Clique para começar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});