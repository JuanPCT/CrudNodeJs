const conexion = require('../database/db');

exports.save = (req,res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    console.log(user +' - '+rol);
}