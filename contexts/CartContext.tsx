import { CartItemModel } from "@/models/cartItemModel";
import { createContext, useState } from "react";

export type CartContextType = {
    cartItems: CartItemModel[];
    addItemToCart(item: CartItemModel): void;
    handleIncreaseCount(item: CartItemModel): void;
    handleDecreaseCount(item: CartItemModel): void;
    handleRemoveItem(item: CartItemModel): void;
    handleCleanCart(): void;
    calculateTotal(): void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children: any
}

export function CartContextProvider(props: Props) {
    // cart data
    const [cartItems, setCartItems] = useState<CartItemModel[]>([]);

    const addItemToCart = (item: CartItemModel) => {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    const handleIncreaseCount = (item: CartItemModel) => {
        const updatedItems = cartItems.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, count: cartItem.count + 1 }
                : cartItem
        );
        setCartItems(updatedItems);
    };

    const handleDecreaseCount = (item: CartItemModel) => {
        const updatedItems = cartItems.map(cartItem =>
            cartItem.id === item.id && cartItem.count > 1
                ? { ...cartItem, count: cartItem.count - 1 }
                : cartItem
        );
        setCartItems(updatedItems);
    };

    const handleRemoveItem = (item: CartItemModel) => {
        const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedItems);
    };

    const handleCleanCart = () => {
        setCartItems([]);
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.count, 0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                handleIncreaseCount,
                handleDecreaseCount,
                handleRemoveItem,
                handleCleanCart,
                calculateTotal,
            }}
        >
            {/* <div><Toaster /></div> */}
            {props.children}
        </CartContext.Provider>
    );
}