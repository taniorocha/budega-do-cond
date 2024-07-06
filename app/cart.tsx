import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

interface Product {
    id: number;
    title: string;
    price: number;
    image_url: string;
}

export default function Cart() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            title: "Coca Cola Lata 300ml Zero",
            price: 1.5,
            image_url: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
        },
        {
            id: 2,
            title: "Coca Cola Lata 300ml Zero",
            price: 1.5,
            image_url: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
        },
        {
            id: 3,
            title: "Coca Cola Lata 300ml Zero",
            price: 1.5,
            image_url: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
        }
    ]);

    const [cartProducts, setCartProduct] = useState<Product[]>([]);

    function handleCheckout() {
        router.navigate("checkout");
    }

    function addProduct() {
        setCartProduct(products);
    }

    return (
        cartProducts.length === 0 ?
            <View style={styles.containerCentered}>
                <Text>Carrinho</Text>
                <Button title="Adicionar produtos" onPress={() => addProduct()} />
            </View>
            :
            <View style={styles.container}>
                <View style={styles.productList}>
                    {cartProducts.map(product => (
                        <View key={product.id} style={styles.productItem}>
                            <View>
                                <Image source={{ uri: product.image_url }} style={styles.productImage} />
                            </View>
                            <Text>{product.title}</Text>
                        </View>
                    ))}
                </View>
                {/* {products.map((product: any) => (
                    <div className="product-item" style={{ display: 'flex', marginBottom: '10px' }} key={product.id}>
                        <div className="product-item-image" style={{ maxWidth: '30%', marginRight: '10px' }}>
                            <img src={product.image} alt="" style={{ width: '100%', borderRadius: '8px' }} />
                        </div>
                        <div className="product-item-info" style={{ width: '100%' }}>
                            <h3>{product.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3><strong>R$ {product.price.toString().replace(".", ",") + "0"}</strong></h3>
                                <div className="count-button" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <button style={{ width: '40px', height: '40px', borderRadius: '5px', background: '#18181b', color: '#9b50e4', border: '2px #9b50e4 solid' }}>-</button>
                                    <p>1</p>
                                    <button style={{ width: '40px', height: '40px', borderRadius: '5px', background: '#18181b', color: '#9b50e4', border: '2px #9b50e4 solid' }}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}
                <View style={styles.addProductButton}>
                    <Button title="Ir para o pagamento" onPress={() => handleCheckout()} />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    containerCentered: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productList: {
        padding: 10
    },
    productItem: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#9d9d9d',
        marginBottom: 10
    },
    productImage: {
        width: 150,
        height: 150
    },
    addProductButton: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        padding: 10
    }
});