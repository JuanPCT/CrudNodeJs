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

router.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('select * from user where id=?',[id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {user:results[0]});
        }
    });    
});

router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('delete from user where id=?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

const crud = require('./controles/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;