var mongo = require('mongodb').MongoClient;
// este es el vector argumento pedido
var age = process.argv[2];
// La direccion de donde requeriremos la inf
var url = 'mongodb://localhost:27017/learnyoumongo'
// estamos conectando
mongo.connect(url, function(err, db) {
  if (err) throw err;
  // estamos llamando a la coleccion
  var parrots = db.collection('parrots');
  // la coleccion con el metodo find
  parrots.find({
    age: {
      // estamos llamando a la variable edad
      $gt: +age
    }
  },
  // La funcion que estaremos realizando dentro
  // de edad con los parametros pedidos en el ejercicio
   {
    name: 1, age: 1, _id: 0
  }).toArray(function(err, docs) {
    // mandando el contenido o error
    if (err) throw err
    console.log(docs);
    //cerramos la bd
    db.close();
  });
});
