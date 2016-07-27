// variables que utilizaremos
var mongo = require('mongodb').MongoClient
var ageArgument = +process.argv[2];
// concatenamos el valor del argumento
var url = 'mongodb://localhost:27017/' + process.argv[2]
// conectamos la funcion del contenido de la db
mongo.connect(url, function (err, db) {
  //  mandamos error si lo hay, si no mandamos el contenido de la BD
  if (err) throw err;
  var collection = db.collection('users')
  // realizamos actualizacion en la coleccion
  collection.update({
    // en la coleccion busco el campo username
    // con valor tinatime
    username: 'tinatime'
  }, {
      //
      $set: {
        // agrergamos nuevo valor al documento
        age: 40
      }
    }, function (err) {
      if (err) throw err;
      // cerrando BD
      db.close();
    });
});
