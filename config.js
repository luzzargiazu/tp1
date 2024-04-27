const mongoose = require('mongoose');

/*const dbconnect = () => {
    1,db = base, 2,configuracion, 3, manejo de errores
    mongoose.connect("mongodb://localhost:27017/users_prueba", {}, (err,res)=>{
        if(!err){
            console.log("Conexion correcta")
        }
        else {
            console.log("Error de conexion")
        }
    })
}
*/

// Todo lo de arriba es lo del tutorial pero no funciona porque se use "connect", es un metodo que ya no funciona en versiones de node mas nuevas.
// El codigo de abajo es usando try y catch, dos metodos que SI funcionan en nuevas versiones.

async function dbconnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/u_prueba', {
        });
        console.log("Conexion correcta");
    } catch (error) {
        console.error("Error de conexion", error);
    }
}

module.exports = dbconnect;