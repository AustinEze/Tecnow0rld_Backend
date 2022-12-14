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


// const express = require('express');
// const { Server: HttpServer } = require('http')
// const { Server: IOServer } = require('socket.io') //Importando la dependencia socket.io

// const app = express();
// const httpServer = new HttpServer(app); 
// const io = new IOServer(httpServer); //Importando la dependencia socket.io


// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// })

// httpServer.listen(8080, () => {
//     console.log('Servidor corriendo en el puerto 8080')
// })


const express = require('express');
const app = express();

const notes = [
    {
        'id': 1,
        'nombre': 'Agustín',
        'estudio': 'Backend'
    },
    {
        'id': 2,
        'nombre': 'Ezequiel',
        'estudio': 'JavaScript'
    },
    {
        'id': 3,
        'nombre': 'Roberto',
        'estudio': 'NodeJs'
    }
]

app.get('/', (req, res) =>{
    res.send('<h1>Hola mundo</h1>')
})

app.get('/api/notes', (req, res) =>{
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) =>{
    const id = Number(req.params.id)
    const noteID = notes.find(notes => notes.id === id)

    if(noteID) {
        res.json(noteID)
    } else {
        res.status(404).end()  //Establezco una respuesta de protocolo web 404 en caso de que no encuentre el ID solicitado.
    }
})

app.delete('/api/notes/:id', (req, res) =>{
    const id = Number(req.params.id) 
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.post('/api/notes', (req, res) => {
    const notes = notes.request.body //Solicito el contenido del array
    
    const ids = notes.map(note => note.id) // Recorre el contenido del array existente y nos devuelve el id de cada nota
    const maxID = Math.max(...ids) // Usamos Math.max  para que nos diga cual es el id máximo actualmente

    const newNote = {
        id: maxID + 1,
        nombre: note.nombre,
        estudio: note.estudio,
    }

    notes = [...note, newNote]
    
    res.json(console.log(newNote)) 

})


const PORT = 8080;
app.listen (PORT, () =>{
    console.log(`Servidor abierto en: http://localhost:${PORT}`)
})


