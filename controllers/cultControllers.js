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

// updateMovie
const updateMovie = (req, res)=>{
    const {id} = req.params;
    const {title, director, year} = req.body;

    const sql = 'UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?';

    db.query(sql, [title, director, year, id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Película actualizada"});
    });
};

// deleteMovie
const deleteMovie = (req, res)=>{
    
    const {id} = req.params;
    const sql = 'DELETE FROM movies WHERE id = ?';

    // Pasamos la consulta a la base de datos
    db.query(sql, [id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Película borrada"});
    });
};

// Exportamos los modulos
module.exports = {
    getAllMovies,
    getMovieById,
    createUsu,
    createMovie,
    updateMovie,
    deleteMovie
};

// Pasamos a configurar db.js