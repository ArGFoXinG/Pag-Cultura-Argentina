// 1- Importamos el módulo mysql
const mysql = require("mysql2");

// 2- Configuración de la conexión
const connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"33834264",
    port: 3306,
});

connection.connect((err)=>{
    if(err){
        console.log("Error de conexión con el servidor: " + err);
        return;
    };
    console.log("Estado de conexión: CONECTADA");

    const sql = 'CREATE DATABASE IF NOT EXISTS cultArg_db';

    connection.query(sql, (err, result)=>{
        if(err){
            console.error('Error al crear la base de datos: ', err);
            return;
        }
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");

        connection.changeUser({database: "cultArg_db"}, (err)=>{
            if(err){
                console.error('Error al cambiar a la base de datos cultArg_db:', err);
                return;
            };

            const createTableQuery = `
            CREATE TABLE IF NOT EXISTS cultArg (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            apellido VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            contraseña VARCHAR(20) NOT NULL,
            dni INT NOT NULL,
            pais VARCHAR(255) NOT NULL
            );
            `;

            const createTableQuery2 = `
            CREATE TABLE IF NOT EXISTS movies (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            director VARCHAR(255) NOT NULL,
            year INT NOT NULL
            );
            `;

            connection.query(createTableQuery, (err,result)=>{
                if(err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                }
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
            connection.query(createTableQuery2, (err,result)=>{
                if(err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                }
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
        });
    });
});

// Exportación del módulo
module.exports = connection;