const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    res.render('index.ejs', {var1: 'Esto es una variable'});
    // conexion.query('select * from users', (error, results)=>{
    //     if(error){
    //         throw error;
    //     }else{
    //         res.send(results);
    //     }
    // });
});

module.exports = router;