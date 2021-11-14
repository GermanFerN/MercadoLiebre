
const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
process.env.PWD = process.cwd()

app.use(express.static(process.env.PWD + '/public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/ofertas.html"))});  

 app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/tiendasoficiales.html"))});  
     
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/vender.html"))});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/ayuda.html"))});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/creatucuenta.html"))});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/ingresa.html"))});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/miscompras.html"))});

