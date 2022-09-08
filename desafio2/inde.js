const fs = require("fs");

class Contenedor {
        
    constructor(rutaArchivo) {
            this.rutaArchivo = rutaArchivo;
        }
        
        async #leerArchivo() {
            try {
                const contenido = await fs.promises.readFile(this.rutaArchivo, "utf-8");
                const contenidoParse = await JSON.parse(contenido)
                return contenidoParse
                
            } catch (error) {
                console.error('Error leer archivo: ' + error)
            }    
         }

         async save(obj) {
             const contenidoArchivo = await this.#leerArchivo()

            if ( contenidoArchivo.length !== 0 ) {
                await fs.promises.writeFile(this.rutaArchivo, JSON.stringify([...contenidoArchivo, {...obj, id: contenidoArchivo[contenidoArchivo.length - 1].id + 1}], null, 2) )
                console.log('Producto guardado con exito en Base de Datos!')
            } else {
                await fs.promises.writeFile(this.rutaArchivo, JSON.stringify([ {...obj, id: 1}]), 'utf-8')
                console.log('Producto guardado con exito en Base de Datos!')
            }

         }
         
         async getById(id) {
            const contenidoArchivo = await this.#leerArchivo()
                
                const producto = contenidoArchivo.filter(item => item.id === id)
                    if (producto.length > 0) {
                        console.log('Producto encontrado: ' + JSON.stringify(producto, true, 2));
                    } else {
                        console.log('Lo sentimos, el id del producto ingresado no existe en nuestra Base de Datos')
                    }
                }

         async getAll() {
            const contenidoArchivo = await this.#leerArchivo()
            console.log(contenidoArchivo)
         }

         async deleteById(id) {
            const contenidoArchivo = await this.#leerArchivo()
            
            const productosSinBorrar = contenidoArchivo.filter(item => item.id !== id)
            const productoABorrar = contenidoArchivo.filter(item => item.id === id)
            
                if ( productoABorrar.length > 0) {
                    await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(productosSinBorrar, null, 2));
                    console.log(`Producto ${JSON.stringify(productoABorrar, null, 2)} \nEliminado con exito de la Base de Datos!!\n`)
                } else {
                    console.log('Lo sentimos, el id del producto ingresado no existe en nuestra Base de Datos')
                }
        }
        
         async deleteAll() {
            const contenidoArchivo = await this.#leerArchivo()
            if( contenidoArchivo.length > 0 ) {
                await fs.promises.writeFile(this.rutaArchivo, JSON.stringify([], null, 2), 'utf-8')
                console.log('Todos los productos han sido Eliminados de la Base de Datos!!!')
            } else {
                console.log('La Base de Datos está vacía!!!')
            }
            
         }
        }         

const contenedor = new Contenedor('./desafio2/productos.txt')

contenedor.save({title: "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900D-10P 24GB", price: 399.999, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_992758-MLA44866145404_022021-O.webp"})
contenedor.getAll()
contenedor.getById(4)
contenedor.deleteById(3)
contenedor.deleteAll()
