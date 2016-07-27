// argumento a utilizar
var ageArgMayor = process.argv[2];
// Conectandonos a la BD
var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient;
// conectamos la BD de mongo y agregamos la accion, parametros y (Collback)
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo", function (err, db) {
    //Si hay error lo manda
    if (err) {
        console.log(">Error al conectarse a:<" + 'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // usamos la coleccion llamada parrots
    var coleccionParrots = db.collection('parrots');
    // manda el conteor de la coleccion
    var objetoResultado = coleccionParrots.count({
        age: { $gt: +ageArgMayor }
    },
        // manda error si lo hay si no muestra el contenido
        function (err, count) {
            // imprimimos el contenido
            console.log(count);
            // cerrando la BD
            db.close();
        });
});
