const express = require('express')
const app = express()
const port = 8080
const graficas = require('./Tarjetas')
const ArrayPorID = require('./Tarjetas')


app.use('/tarjetas', graficas)

app.use('/tarjetas/:id', ArrayPorID)

app.use(express.json()) // para que reciba peticiones y las interprete en JSON 

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo!!</h1>')
})

app.listen(port, () => {
  console.log(`Encendido y escuchando al puerto ${port}`)
})