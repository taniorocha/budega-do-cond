import { CartContext } from "@/contexts/CartContext";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PaymentConfirmation() {
    const context = useContext(CartContext);
    const { success } = useLocalSearchParams();

    useEffect(() => {
        const interval = setInterval(() => {
            if(success === "true") {
                context?.handleCleanCart();
                router.replace("/");
            }
            else
                router.back();
            clearInterval(interval);
        }, 3000);
    }, [success]);

    return (
        // <View style={Object.assign(styles.container, { backgroundColor: success === "true" ? '#2bc376' : '#e75555' })}>
        <View style={success === "true" ? styles.containerSuccess : styles.containerError}>
            <Text style={styles.text}>{success === "true" ? "Pagamento confirmado" : "Não foi possível realizar este pagamento"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerSuccess: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#2bc376'
        // '#2bc376' : '#e75555'
    },
    containerError: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#e75555'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
});