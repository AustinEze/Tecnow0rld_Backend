// const express = require('express');
// const app = express();
// const faker = require('faker');
// const port = 8080;

// app.get('/', (req, res) => {
//     res.send('Ruta 1')
// });

// app.get('/2', (req, res) => {
//     res.send ('Ruta 2')
// })

// //OBSERVACIÓN: siempre poner por encima los endpoints especificos (/products) antes que los dínamicos (aquellos que reciben parametro, como /:id)
// app.get('/products', (req, res) => {        
//     const products = []
//     const { size } = req.query; // parametros query
//     const limit = size || 10;
//     for (let i = 0; i < limit; i++){
//         products.push({
//             name: faker.commerce.productName(), //Probando la dependencia de faker 
//             price: parseInt(faker.commerce.price(), 10), //Probando la dependencia de faker 
//             image: faker.image.imageUrl() //Probando la dependencia de faker 
//         })
//     }
//     res.json(products);
// })

// app.get('/people/:people1', (req, res) => {
//     const {people1} = req.params
//     res.json({
//         nombre: 'Agustín',
//         apellido: 'Martearena',
//         edad: 23,
//         curso: 'Backend NodeJS'
//     })
// })
// app.get('/people/:people2/:id2', (req, res) => {
//     const {people2, id2} = req.params
//     res.json({
//         nombre: 'Ezequiel',
//         apellido: 'Gomez',
//         edad: 26,
//         curso: 'JavaScript Vanilla'
//     })
// })

// app.listen(port, () => {
//     console.log(`Iniciando servidor en ${port}`)
// })

///////////////////////////////////////////////////////////////////////////////////


const express = require('express');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io') //Importando la dependencia socket.io

const app = express();
const httpServer = new HttpServer(app); 
const io = new IOServer(httpServer); //Importando la dependencia socket.io


app.get('/', (req, res) => {
    res.send('Hola mundo');
})

httpServer.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080')
})






