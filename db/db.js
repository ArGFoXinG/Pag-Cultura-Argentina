// 1- Importamos el módulo mysql
const mysql = require("mysql");

// 2- Configuración de la conexión
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
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
            fechaDeNac DATE NOT NULL,
            pais INT NOT NULL
            );
            `;

            connection.query(createTableQuery, (err,result)=>{
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