// 1- Importamos express
const express = require("express");

// 2- Instanciamos express
const app = express();

// 3- Importamos el módulo de las rutas
const cultRoutes = require("../routes/cultRouter.js");
const registroRoutes = require("../routes/registroRouter.js")

// 4- Declaramos el puerto
const PORT = 3000;

// 5- Transformación del body a formato legible
app.use(express.json());

// 6- Prefijo principal de las rutas
app.use("/cultArg", cultRoutes);
app.use("/registro", registroRoutes);

// 7- Inicializamos el servidor
app.listen(PORT, ()=>{console.log(`Servidor escuchando en el puerto: ${PORT}`)});

// 8- Pasamos a codificar cultRouter y registroRouter