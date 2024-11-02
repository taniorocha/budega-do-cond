import { ProductModel } from "@/models/productModel";

export class ProductService {
    constructor() { }

    static fakeProducts: ProductModel[] = [
        { id: 1, title: 'Arroz Tio João 1Kg', price: 1.5, image_url: 'https://m.media-amazon.com/images/I/71rBEHnIkXL.jpg', stock: 3 },
        { id: 2, title: 'Feijão Kicaldo 1Kg', price: 1.3, image_url: 'https://megag.com.br/v21/wp-content/uploads/2021/08/998-450x326.jpg', stock: 5 },
        { id: 3, title: 'Macarrão Instantaneo Nission Lámen', price: 1.2, image_url: 'https://static.paodeacucar.com/img/uploads/1/595/604595.png', stock: 4 },
        { id: 4, title: 'Coca Cola Lata 250ml', price: 1.2, image_url: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg', stock: 2 },
        { id: 5, title: 'Biscoito recheado Amori Morango', price: 1.2, image_url: 'https://richester.b-cdn.net/wp-content/uploads/2021/02/Recheado-Amori-Morango-125g-1.png', stock: 7 },
    ];

    static async GetProducts(): Promise<ProductModel[]> {
        console.log("Buscand lista de produtos...");
        await this.FakeAwait(3000);
        return this.fakeProducts;
    }

    static FakeAwait(delay: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('After waiting 3 seconds, return this sentense as the required data to the browser.');
            }, delay);
        });
    }
}