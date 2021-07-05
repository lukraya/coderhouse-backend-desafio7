const express = require("express");
const fs = require("fs");

const app = express();
const PUERTO = 8080;

/* const getProductos = async ()=>{
    try {
        const contenido = await fs.promises.readFile("./productos.txt");
        return JSON.parse(contenido)
    }
    catch (error) {
        console.log(`No se pudo leer el archivo. Error: ${error}`)
    }
}
const productos = getProductos(); */
const data = fs.readFileSync("./productos.txt");
const productos = JSON.parse(data);
let cantItems = 0;
let cantItem = 0;

app.get('/items', (req, res)=>{
    cantItems++;
    //console.log(productos);
    const respuesta = {
        items: productos,
        cantidad: productos.length
    };
    res.json(respuesta)
})

app.get('/item-random', (req, res)=>{
    cantItem++;
    const n = Math.floor(Math.random() * productos.length);
    const respuesta = {
        item: productos[n]
    };
    res.json(respuesta)
})

app.get('/visitas', (req, res)=>{
    const respuesta = {
        visitas: {
            items: cantItems,
            item: cantItem
        }
    }
    res.json(respuesta)
})

const server = app.listen(PUERTO, ()=>{
    console.log(`El servidor está corriendo en el puerto http://localhost:${PUERTO}`)
});
server.on("error", error => console.log(`Error en servidor: ${error}`));