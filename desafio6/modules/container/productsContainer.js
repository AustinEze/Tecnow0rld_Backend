class Container {
    constructor(products = []) {
        this.products = products,
            this.lastId = 1,
            this.error = { error: 'producto no encontrado' }
    }

    #productExists(id) {
        const product = this.products.find(product => product.id === parseInt(id));

        if (product) {
            return true
        }

        return false
    }

    save(data) {
        let { nombre, precio, urlImagen } = data;

        precio = parseInt(precio);

        if (this.products.length === 0) {
            this.products = [{ nombre, precio, urlImagen, id: this.lastId }];

            return this.lastId
        } else {
            this.lastId = this.products[this.products.length - 1].id + 1;
            this.products = [...this.products, { nombre, precio, urlImagen, id: this.lastId }];

            return this.lastId
        }
    }

    change(id, data) {
        const exists = this.#productExists(id)

        if (exists) {
            let { nombre, precio } = data;
            const productId = parseInt(id)
            precio = parseInt(precio);

            const indexProduct = this.products.indexOf(this.products.find(product => product.id === productId));

            this.products[indexProduct] = { nombre, precio, productId };
        }

        return exists
    }

    getAll() {
        return this.products
    }

    getById(id) {
        const exists = this.#productExists(id)

        if (exists) {
            const productFound = this.products.find(product => product.id === parseInt(id));
            return productFound
        }

        return exists
    }

    deleteById(id) {
        const exists = this.#productExists(id)

        if (exists) {
            const deletedProduct = this.products.indexOf(this.products.find(product => product.id === parseInt(id)));

            this.products.splice(deletedProduct, 1);

            return exists
        }

        return exists
    }

    deleteAll() {
        this.products = [];

        console.log("Productos borrados");
    }
}

const container = new Container([
    {
        nombre: "Placa de video Nvidia MSI Ventus GeForce RTX 30 Series RTX 3090 GEFORCE RTX 3090 VENTUS 3X 24G 24GB",
        precio: 344.524,
        urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_692818-MLA44385884034_122020-F.webp',
        id: 1
    },
    {
        nombre: "Placa de video Nvidia Evga KO Gaming GeForce RTX 20 Series RTX 2060 06G-P4-2068-KR 6GB",
        precio: 111.248,
        urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_989904-MLA43401240797_092020-F.webp',
        id: 2
    }
]);

module.exports = container;