// Creamos la variable argumento vector a utilizar 
var size = process.argv[2];
// conectamos la BD
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
// Conectamos el clientede mongo y el Call Back de la funcion
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo", function (err, db){
//Verificando si hubo un error en la conexion
        if(err) throw err;
// variable de la coleccion a utilizar
    var ColeccionPrecios = db.collection('prices');
    // Aplicando la funcion aggregate() para la coleccion
    var objetoArg = ColeccionPrecios.aggregate([
        {
            $match: {size: size}
        },
        { // haciendo operaciones en ciertos campos especificos
            $group: { _id: 'total', average: {$avg: '$price'}
            }
        }
    ]);
 objetoArg.toArray(function(err, results)
    {
        if (err) throw err
        if (!results.length){
            throw new Error('>Sin resultados');
        }
        var value = results[0]
        // acepta el número de decimales para redondear 
        // y devuelve los caracteres que representa el númer con dos decimales
        console.log(Number(value.average).toFixed(2));
        // cerrando la BD
        db.close();
    });
});
