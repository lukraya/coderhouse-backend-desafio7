const express = require("express");
const app = express();

const PUERTO = 8080;

const server = app.listen(PUERTO, ()=>{
    console.log(`El servidor está corriendo en el puerto http://localhost:${PUERTO}`)
});
server.on("error", error => console.log(`Error en servidor: ${error}`));