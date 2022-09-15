const express = require('express');
const Contenedor = require('./index3.js') //Pido el archivo js que tiene el contenedor 
const app = express();
const PORT = 8080

const productos = new Contenedor('./desafio3/productos.txt') // Creo un nuevo contenedor con la ruta de productos.txt donde va a guardarse el array

app.get('/productos', async (req, res) =>{
    try {
        const product = await productos.leerArchivo()        
        console.log(product) // para que puedas ver por la terminal que es lo que contiene prod.
        res.json(product)
    }catch (error) {
        console.error('Error leer archivo: ' + error)
    }    

})

app.get('/', (req, res) => {
    res.send('Esta es la respuesta de res.send')    // Envío una respuesta dentro del PORT con el metodo app.get para mostrar el mensaje 
})

app.listen(PORT, () => console.log('El servidor está escuchando al puerto 8080 :)')); // Establezco la respuesta del servidor 