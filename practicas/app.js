import express from 'express';
import morgan from 'morgan';

const app = express();

//Settings 
app.set('port', 8080);

//Middleware : Pequeñas funciones intermedias entre una peticion y una respuesta.
app.use(morgan('dev'));


export default app; 