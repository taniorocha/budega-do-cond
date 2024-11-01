import { ProductModel } from "@/models/productModel";
import { View, StyleSheet, Image, Text } from "react-native";

interface Props {
    product: ProductModel;
}

export default function CartProduct(props: Props) {
    return (
        <View key={props.product.id} style={styles.productItem}>
            <View>
                <Image source={{ uri: props.product.image_url }} style={styles.productImage} />
            </View>
            <Text>{props.product.title}</Text>
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
    productImage: {
        width: 150,
        height: 150
    }
});