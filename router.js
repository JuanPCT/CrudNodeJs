const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    conexion.query('select * from user', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    });
});

router.get('/create', (req, res)=>{
    res.render('create');
});

const crud = require('./controles/crud');
router.post('/save', crud.save);

module.exports = router;