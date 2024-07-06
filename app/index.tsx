import { useEffect, useState } from "react";

export default function Home() {
    const [products, setPRoducts] = useState<any>([]);

    useEffect(() => {
        setPRoducts([
            {
                id: 1,
                title: "Coca Cola Lata 300ml Zero",
                price: 1.5,
                image: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
            },
            {
                id: 2,
                title: "Coca Cola Lata 300ml Zero",
                price: 1.5,
                image: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
            },
            {
                id: 3,
                title: "Coca Cola Lata 300ml Zero",
                price: 1.5,
                image: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
            }
        ]);
    }, []);

    return ( 
        // <View>teste</View>
        <div style={{padding: '10px', background: '#18181b', color: '#fff', height: '100%'}}>
            <h2>Lista de produtos</h2>
            {products.map((product: any) => (
                <div className="product-item" style={{display: 'flex', marginBottom: '10px'}} key={product.id}>
                    <div className="product-item-image" style={{ maxWidth: '30%', marginRight: '10px'}}>
                        <img src={product.image} alt="" style={{width: '100%', borderRadius: '8px'}} />
                    </div>
                    <div className="product-item-info" style={{ width: '100%'}}>
                        <h3>{product.title}</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h3><strong>R$ {product.price.toString().replace(".", ",") + "0"}</strong></h3>
                            <div className="count-button" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                                <button style={{width: '40px', height: '40px', borderRadius: '5px', background: '#18181b', color: '#9b50e4', border: '2px #9b50e4 solid' }}>-</button>
                                <p>1</p>
                                <button style={{width: '40px', height: '40px', borderRadius: '5px', background: '#18181b', color: '#9b50e4', border: '2px #9b50e4 solid' }}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}