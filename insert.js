var mongo = require('mongodb').MongoClient,
    //primer argumento
    firstName = process.argv[2],
    // utlizaremos otro vector aggumento 
    // para el argumento pasado al script
    lastName = process.argv[3];
var doc = {
    firstName: firstName,
    lastName: lastName
}
var url = 'mongodb://localhost:27017/learnyoumongo';
//conectamos con el MOngoCliente
mongo.connect(url, function (err, db) {
    if (err) throw err;
    var collection = db.collection('users')
    //insertando un documento
    collection.insert(doc, function (err, data) {
        // manejando errores
        if (err) throw err;
        //imprimiremos el objeto usado para crear el documento
        //utilizando JSON.stringify, para convertirlo a json
        console.log(JSON.stringify(doc));
        //cerramos BD
        db.close();
    });
});
