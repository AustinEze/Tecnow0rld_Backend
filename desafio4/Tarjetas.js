const express = require('express') // llamando a express 
const filtroID = require('./controlador')
const router = Router() //uso Router
const controlador = require('./controlador')

const TarjetasGraficas = [
    {
        nombre: 'GeForce RTX 3090 16GB ASUS ROG STRIX',
        id: '1',
        precio: '$ARS 399.999',
    },
    {
        nombre: 'GeForce RTX 3090 16GB ASUS ROG STRIX',
        id: '2',
        precio: '$ARS 399.999',
    },
    {
        nombre: 'GeForce RTX 3090 16GB ASUS ROG STRIX',
        id: '3',
        precio: '$ARS 399.999',
    },
]

/////////////////////Routers////////////////////////////

router.get('/', (req, res) => {
    res.send(TarjetasGraficas)
})

router.post('/', (req, res) =>{
    const GuardarArray = req.body
    TarjetasGraficas.push(GuardarArray)
    res.status(201).send({status: 'Guardado'})
})
 
router.get('/tarjetas', (req, res) => {
    res.JSON(graficas) 
})


router.get('/tarjetas/:id', (req, res) => {
    let {id} = req.params //Para solicitar id
    let validar = FiltrarPorID(id)
    if(!validar) {
    //  — Aca pongo eso ya que en tu funcion me retornas un mensaje
        res.send(validar) 

    } else {
        console.log('Lo sentimos, el id del producto ingresado no existe en nuestra Base de Datos')
    }
})


// router.post('/tarjetas/:id', (req, res) => {
//     res.JSON(productoPorID) 
// })

// router.patch('/tarjetas/:id', (req, res) => {
//     res.JSON(productoPorID) 
// })

// router.delete('/tarjetas/:id', (req, res) => {
//     res.JSON(productoPorID) 
// })

///////////////////////////////////////////////////////

module.exports = router