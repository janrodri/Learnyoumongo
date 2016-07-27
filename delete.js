// variables de entorno que utilizaremos
var mongo = require('mongodb').MongoClient,
  // nombre de la BD
  Nombre_bd = process.argv[2],
  // nombre de la coleccion
  coleccion = process.argv[3],
  // nombre de la identificacion
  identificacion = process.argv[4];
  // conectando con learnyoumongo
var url = 'mongodb://localhost:27017/' + Nombre_bd;
// conectando con mongo y creando nuestro collback
mongo.connect(url, function (err, db) {
  // identificamos is hay error
  if (err) throw err;
  // Eliminando el documento de la coleccion
  collection = db.collection(coleccion)
  collection.remove({ _id: identificacion },
    function (err) {
      // mandando error si lo hay
      if (err) throw err;
      // cerrando BD
      db.close();
    });
});
