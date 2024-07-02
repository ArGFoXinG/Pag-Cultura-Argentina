// 1- Importamos el módulo db
const db = require("../db/db.js");

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

// 4- createUsu
const createUsu = (req,res)=>{
    const {nombre, apellido, email, contraseña, dni, pais} = req.body;
    const sql = 'INSERT INTO cultArg (nombre, apellido, email, contraseña, dni, pais) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(sql, [nombre, apellido, email, contraseña, dni, pais], (error, results)=>{
        if(error){throw error};
        res.json({mensaje: "Usuario registrado con éxito"});
    });
};

// createMovie
const createMovie = (req, res)=>{
    const {title, director, year} = req.body;

    const sql = "INSERT INTO movies (title, director, year) VALUES (?, ?, ?)";

    db.query(sql, [title, director, year], (error, result)=>{
        
        if(error){throw error};
        
        res.json({mensaje: "Película creada"});
    });
};


// Exportamos los modulos
module.exports = {
    getAllMovies,
    getMovieById,
    createUsu,
    createMovie
};

// Pasamos a configurar db.js