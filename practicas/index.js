import app from './app'

const main = () => {
    app.listen(app.get('port')); // Traemos el valor 'port' que ya está establecido en app.js
    console.log(`El puerto esta corriendo en ${app.get('port')}`)
}

main();

