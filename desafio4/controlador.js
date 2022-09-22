const graficas = require('./Tarjetas')


function FiltrarPorID(graficas) {
    if ('id' in graficas && typeof graficas.id === 'number' && !isNaN(graficas.id)) {
        return(graficas)
        // let IDfiltrado = req.params(obj)
    } 
    else{
        console.log('Introduce un ID válido y vuelve a intentarlo.')
    }
}

module.exports = FiltrarPorID()
