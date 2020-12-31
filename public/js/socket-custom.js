 // io aparece gracias a la librería que importé arriba
 var socket = io();

 // ===== socket.on es para escuchar eventos ======
 // al conectarse al servidor...
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 // si se desconecta del servidor...
 socket.on('disconnect', function() {
     console.log('Conexión con el servidor perdida.');
 });

 // ==== socket.emit es para enviar información ====
 // el nombre del mensaje es enviarMensaje, de esta forma lo identifico en el servidor y lo logro escuchar 
 socket.emit('enviarMensaje', {
     
     usuario: 'Joel',
     mensaje: 'Hola mundo'

     // recibo la respuesta como argumento en el callback
 }, function(resp){
     // esta función es un callback como tercer argumento del socket.emit
     // se va a ejecutar si le llega el mensaje al servidor
     // sirve para confirmarle al cliente que su mensaje se recibió en el servidor
     console.log('Respuesta del servidor: ', resp);
 });


 // Escuchar información del servidor
 socket.on('enviarMensajeServidor', function(mensaje) {
     console.log('Mensaje del servidor: ', mensaje);
 });
