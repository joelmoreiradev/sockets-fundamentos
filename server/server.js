// cargo la librería de express
const express = require('express');

const socketIO = require('socket.io');

const http = require('http');

// cargo la librería path
const path = require('path');

// inicializo o creo una instancia de express para usar
const app = express();
// configuro un servidor http, ya que socket.io no trabaja directamente con express
// pero puedo mandar el app como argumento para tener toda la configuración del express
let server = http.createServer(app);


// creo un path para la carpeta pública
const publicPath = path.resolve(__dirname, '../public');


const port = process.env.PORT || 3000;

// habilitar la carpeta pública para poder acceder a ella
app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
// exporto la variable io (var io = socketIO...) para usarlo en socket.js
module.exports.io = socketIO(server);

require('./sockets/socket');



// escuchar el puerto del servidor
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});