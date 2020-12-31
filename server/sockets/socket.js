const {io} = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensajeServidor', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // si se desconecta un usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el mensaje emitido desde el cliente (enviarMensaje es el nombre del mensaje para identificarlo y escucharlo)
    // recibo como argumento el 'mensaje' para recibir el mensaje y poder mostrarlo en consola
    // y recibo el callback para poder ejecutarlo con callback();
    client.on('enviarMensaje', (data, callback) =>{
     
     // ejecuto el callback del cliente desde el servidor
     // y le doy una respuesta al cliente
     // si en el mensaje está el 'usuario'
    //  if(mensaje.usuario){
    //      // ejecuto el callback(); y dentro le envío un objeto con una respuesta
    //      callback({
    //          resp: 'Todo salió bien'
    //      });
    //  } else {
    //     callback({
    //         resp: 'Ocurrió un error, no se recibió el usuario...'
    //     });
    //  }

     // muestro el mensaje emitido desde el cliente, en la consola del servidor.
     console.log(data);

     /* broadcast es para emitir a todo el mundo, cuando el cliente le envíe algo al servidor, 
     el servidor va a responderle a todos los clientes conectados lo mismo */
     client.broadcast.emit('enviarMensajeServidor', data);


    });


});