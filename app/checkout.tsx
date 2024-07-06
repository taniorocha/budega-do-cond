import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Checkout() {
    function handlePaymentFeedback(paymentSuccess: boolean) {
        router.navigate("payment-confirmation/" + paymentSuccess);
    }

    return (
        <View style={styles.container}>
            <Text>Insira ou aproxime o cartão</Text>
            <View style={styles.debugButtons}>
                <Button title="Pag. confirmado" color={"green"} onPress={() => handlePaymentFeedback(true)} />
                <Button title="Pag. com erro" color={"red"} onPress={() => handlePaymentFeedback(false)} />
            </View>
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
    debugButtons: {
        position: 'absolute',
        flexDirection: 'row',
        gap: 10,
        bottom: 10
    }
});