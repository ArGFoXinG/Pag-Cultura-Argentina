// 1- Importamos el módulo express
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el controlador de funciones
const cultControllers = require("../controllers/cultControllers.js");

// 4- Planteamos la solicitud put
router.put("/registro", cultControllers.updateUsu);

// 5- Exportamos el módulo
module.exports = router;

// 6- Pasamos a cultControllers