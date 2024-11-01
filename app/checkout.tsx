import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Checkout() {

    function selectPaymentMethod(option: number) {
        switch(option) {
            case 1:
                router.navigate("pix-payment");
                break;
            case 2:
                router.navigate("card-payment");
                break;
            case 3:
                router.navigate("card-payment");
                break;
            default:
                break;
        }
    }

    function handleBack() {
        router.back();
    }

    return (
        <View style={styles.container}>
            <Text>Selecione como deseja pagar sua compra</Text>
            <View style={styles.paymentMethods}>
                <Button title="Pix" color={"green"} onPress={() => selectPaymentMethod(1)} />
                <Button title="Cartão de crédito" color={"red"} onPress={() => selectPaymentMethod(2)} />
                <Button title="Cartão de débito" color={"blue"} onPress={() => selectPaymentMethod(3)} />
            </View>
            <View style={styles.bottonButton}>
                <Button title="Voltar para o carrinho" color={"red"} onPress={() => handleBack()} />
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
    paymentMethods: {
        paddingTop: 20,
        gap: 10,
    },
    bottonButton: {
        position: 'absolute',
        bottom: 10,
        width: '95%'
    }
});