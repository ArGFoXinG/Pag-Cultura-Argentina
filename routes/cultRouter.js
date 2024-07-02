// 1- Importamos el módulo express
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el controlador de funciones
const cultControllers = require("../controllers/cultControllers.js");

// 4- Planteamos la solicitud get y post
router.post("/create", cultControllers.createMovie);
router.get("/list", cultControllers.getAllMovies);
router.get("/:id", cultControllers.getMovieById);
router.post("/registro", cultControllers.createUsu);
router.put("/:id", cultControllers.updateMovie);
router.delete("/:id", cultControllers.deleteMovie);

// 5- Exportamos el módulo
module.exports = router;

// 6- Pasamos a cultControllers