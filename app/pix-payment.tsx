import { router } from "expo-router";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function PixPayment() {
    function handlePaymentFeedback(paymentSuccess: boolean) {
        router.navigate("payment-confirmation/" + paymentSuccess);
    }

    function handleBack() {
        router.back();
    }

    return (
        <View style={styles.container}>
            <Text>Pague através do QR-Code abaixo</Text>
            <View>
                <Image source={{ uri: '//api.qrcode-monkey.com/tmp/525a7ba02e726e60e0b69144e060401e.svg?1730501858376' }} style={styles.qrCode} />
            </View>
            <View style={styles.debugButtons}>
                <Text>Debug:</Text>
                <Button title="Pag. confirmado" color={"green"} onPress={() => handlePaymentFeedback(true)} />
                <Button title="Pag. com erro" color={"red"} onPress={() => handlePaymentFeedback(false)} />
            </View>
            <View style={styles.bottonButton}>
                <Button title="Voltar para o checkout" color={"red"} onPress={() => handleBack()} />
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
    },
    bottonButton: {
        position: 'absolute',
        bottom: 10,
        width: '95%'
    },
    qrCode: {
        width: 250,
        height: 250
    }
});