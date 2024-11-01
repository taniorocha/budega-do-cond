import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Home() {
    function handleStart() {
        router.navigate("cart");
    }

    return (
        <View style={styles.container}>
            <Button title="Clique para começar" onPress={() => handleStart()} />
            {/* <Link href={"cart"}>Ir para o carrinho</Link> */}
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
    }
});