import React, { useContext, useEffect, useState } from 'react';
import { router } from "expo-router";
import { CartItemModel } from "@/models/cartItemModel";
import { View, Text, TextInput, FlatList, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { ProductModel } from '@/models/productModel';
import CartProduct from '@/components/cartProduct';
import { CartContext } from '@/contexts/CartContext';
import { ProductService } from '@/services/productService';

export default function Cart() {
    const context = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [products, setProducts] = useState<ProductModel[]>();

    useEffect(() => {
        getProducts();
    }, [context?.cartItems.length]);

    async function getProducts() {
        const products = await ProductService.GetProducts();
        setProducts(products);
    }

    const handleScan = () => {
        const productList = products ?? [] as ProductModel[];
        const scannedProduct = productList[0];
        addItemToCart(scannedProduct);
    };

    const addItemToCart = (product: ProductModel) => {
        const cartItems = context?.cartItems ?? [];
        const itemIndex = cartItems.findIndex(item => item.id === product.id);
        if (itemIndex > -1) {
            const updatedItems = [...cartItems];
            context?.handleIncreaseCount(updatedItems[itemIndex]);
        } else {
            const cartItem: CartItemModel = {
                id: product.id,
                title: product.title,
                price: product.price,
                image_url: product.image_url,
                stock: product.stock,
                count: 1
            };
            context?.addItemToCart(cartItem);
        }
        setModalVisible(false);
    };

    const handleCancel = () => {
        context?.handleCleanCart();
        router.navigate("");
    };

    const handleCheckout = () => {
        router.navigate("checkout");
    };

    const filteredProducts = products?.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
                <Text style={styles.buttonText}>Bipar Produto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Buscar Produto</Text>
            </TouchableOpacity>

            {(!products || products.length === 0) &&
                <Text>Loading de buscando produtos...</Text>
            }

            <Text style={styles.cartTitle}>Carrinho:</Text>
            <FlatList
                data={context?.cartItems}
                keyExtractor={(item: CartItemModel) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartProduct
                        item={item}
                    // handleDecreaseCount={context?.handleDecreaseCount}
                    // handleIncreaseCount={context?.handleIncreaseCount}
                    // handleRemoveItem={context?.handleRemoveItem}
                    />
                )}
            />

            <Text style={styles.total}>Total: {context?.calculateTotal() ?? 0}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleCancel()} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCheckout()} disabled={context?.cartItems.length == 0} style={context?.cartItems.length == 0 ? styles.checkoutDisabledButton : styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Prosseguir para Pagamento</Text>
                </TouchableOpacity>
            </View>

            {/* Modal de Pesquisa */}
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Buscar produto"
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                        />
                        <FlatList
                            data={filteredProducts}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => addItemToCart(item)}>
                                    <Text style={styles.productItem}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    scanButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    modalButton: {
        backgroundColor: '#28A745',
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
    cartTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },

    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    productItem: {
        padding: 15,
        backgroundColor: '#f1f1f1',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cancelButton: {
        backgroundColor: '#FF4C4C',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    checkoutDisabledButton: {
        backgroundColor: '#ababab',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    checkoutButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});