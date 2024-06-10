// Este es el corazon del servidor, aca vendran todas las peticiones

const express = require('express')
require('dotenv').config()
const cors = reuire('cors')
const {dbConnection} = require('./database/config')

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection()
//Cors
app.use(cors())

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json())

// Directorio Publico
app.use(express.static('public'));

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})