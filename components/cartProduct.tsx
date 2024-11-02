import { CartContext } from "@/contexts/CartContext";
import { CartItemModel } from "@/models/cartItemModel";
import { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface Props {
    item: CartItemModel;
}

export default function CartProduct(props: Props) {
    const context = useContext(CartContext);

    return (
        <View style={styles.cartItemContainer}>
            <Image source={{ uri: props.item.image_url }} style={styles.productImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.cartItem}>{props.item.title}</Text>
                <View style={styles.quantityButtons}>
                    <TouchableOpacity onPress={() => context?.handleDecreaseCount(props.item)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text>{props.item.count}</Text>
                    <TouchableOpacity onPress={() => context?.handleIncreaseCount(props.item)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => context?.handleRemoveItem(props.item)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productItem: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#9d9d9d',
        marginBottom: 10
    },
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    cartItem: {
        fontSize: 16,
    },
    quantityButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginLeft: 5,
    },
    removeButton: {
        backgroundColor: '#FF4C4C',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});