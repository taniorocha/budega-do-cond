import { CartContextProvider } from "@/contexts/CartContext";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <CartContextProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"></Stack.Screen>
                <Stack.Screen name="products"></Stack.Screen>
                <Stack.Screen name="cart"></Stack.Screen>
                <Stack.Screen name="checkout"></Stack.Screen>
                <Stack.Screen name="payment-confirmation/[success]"></Stack.Screen>
            </Stack>
        </CartContextProvider>
    );
}