module.export = function FiltrarPorID(graficas){
    if ('id' in graficas && typeof graficas.id === 'number' && !isNaN(graficas.id)){
        return (graficas)
    } else{
        console.log('Lo sentimos, el id del producto ingresado no existe en nuestra Base de Datos')
    }
}  


// function FiltrarPorID(TarjetasGraficas) {
//     console.log(TarjetasGraficas)    
//     if ('id' in graficas && typeof graficas.id === 'number' && !isNaN(graficas.id)) {
//         return(TarjetasGraficas)
//         let IDfiltrado = req.params(obj)
//     } 
//     else{
//         console.log('Introduce un ID válido y vuelve a intentarlo.')
//     }
// }

// module.exports = FiltrarPorID
