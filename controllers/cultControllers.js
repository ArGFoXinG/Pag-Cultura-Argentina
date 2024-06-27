// 1- Importamos el módulo db
const db = require("../db/db");

// 2- getAllMovies
const getAllMovies = (req,res)=>{
    const sql = "SELECT * FROM movies";

    db.query(sql, (error, results)=>{
        if(error){throw error};
        res.json(results);
    });
};

// 3- getMovieById
const getMovieById = (req,res)=>{
    const {id} = req.params;
    const sql = "SELECT * FROM movies WHERE id = ?";

    db.query(sql, [id], (error, results)=>{
        if(error){throw error};
        res.json(results);
    });
};

// 4- updateUsu
const updateUsu = (req,res)=>{
    const {id} = req.params;
    const{nombre, apellido, email, contraseña, fechaDeNac, pais} = req.body;
    const sql = 'UPDATE usu SET nombre = ?, apellido = ?, email = ?, contraseña = ?, fechaDeNac = ?, pais = ? WHERE id = ?';

    db.query(sql, [nombre, apellido, email, contraseña, fechaDeNac, pais, id], (error, results)=>{
        if(error){throw error};
        res.json({mensaje: "Usuario registrado con éxito"});
    });
};

// Exportamos los modulos
module.exports = {
    getAllMovies,
    getMovieById,
    updateUsu
};

// Pasamos a configurar db.js