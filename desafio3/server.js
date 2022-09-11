// import {Contenedor, fileRoute} from '../desafio2/inde.js';
// import express from 'express';

// const app = express();
// let fileContent = new Contenedor(fileRoute)

// app.get('../desafio2/productos', (req, res) => {
//     fileContent.getAll().then(productos => res.send(productos))
// })


const express = require('express');
const Contenedor = require('../desafio2/inde.js') //Pido el archivo js que tiene el contenedor 
const app = express();
const PORT = 8080

const productos = new Contenedor('../desafio2/productos.txt') // Creo un nuevo contenedor con la ruta de productos.txt donde va a guardarse el array

app.get('./productos', (req, res) =>{
    res.json(productos.getAll())
})

app.get('/', (req, res) => {
    res.send('Esta es la respuesta de res.send')    // Envío una respuesta dentro del PORT con el metodo app.get para mostrar el mensaje 
})

app.listen(PORT, () => console.log('El servidor está escuchando al puerto 8080 :)')); // Establezco la respuesta del servidor 