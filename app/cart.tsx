import CartProduct from "@/components/cartProduct";
import { CartProductModel } from "@/models/cartProductModel";
import { ProductModel } from "@/models/productModel";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons'
// Icon.loadFont();


export default function Cart() {
    const [products, setProducts] = useState<ProductModel[]>([

    ]);

    const [cartProducts, setCartProducts] = useState<CartProductModel[]>([]);

    function handleCancel() {
        setCartProducts([]);
        router.navigate("");
    }

    function handleCheckout() {
        router.navigate("checkout");
    }

    function addProduct() {
        const newProduct = {
            id: cartProducts.length + 1,
            title: "Coca Cola Lata 300ml Zero",
            price: 1.5,
            image_url: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg",
            stock: 3,
            count: 1
        };
        
        setCartProducts(cartProducts => [...cartProducts, newProduct]);
    }

    function cartCount() {
        return cartProducts.reduce((n, {count}) => n + count, 0);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
                <Text>Seu carrinho tem <strong>{cartCount()}</strong> Itens</Text>
                {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
            </View>
            <View style={styles.content}>
                <Text>Conteúdo</Text>
                {cartProducts.map(product => <CartProduct key={product.id} product={product} />)}
            </View>
            <View style={{}}>
                <Button title="Adicionar" onPress={() => addProduct()} />
            </View>
            <View style={styles.bottonButtons}>
                <Button title="Cancelar" color={'red'} onPress={() => handleCancel()} />
                <Button title="Ir para o pagamento" disabled={cartCount() === 0} onPress={() => handleCheckout()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10
    },
    header: {
        backgroundColor: 'red',
        height: 50,
        padding: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: 'green',
        maxHeight: '70%',
        overflow: 'scroll'
    },
    searchIcon: {},
    bottonButtons: {
        position: 'absolute',
        flexDirection: 'row',
        gap: 10,
        bottom: 10,
    },
    button: {
        
    }
});