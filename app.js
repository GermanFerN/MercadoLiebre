var express = require('express')
const path = require("path");


var app = express()
app.use(express.static(__dirname + '/public'));


app.listen( 4000, ()=>{
    console.log('http://localhost:4000');
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/views/home.html"))});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/views/login.html"))});

app.get('/ayuda', function(req, res) {
        res.sendFile(path.join(__dirname, "/public/views/ayuda.html"))});
        
app.get('/miscompras', function(req, res) {
         res.sendFile(path.join(__dirname, "/public/views/miscompras.html"))});

app.get('/ofertas', function(req, res) {
          res.sendFile(path.join(__dirname, "/public/views/ofertas.html"))});
                
app.get('/register', function(req, res) {
         res.sendFile(path.join(__dirname, "/public/views/register.html"))});

app.get('/', function(req, res) {
         res.sendFile(path.join(__dirname, "/public/views/tiendasoficiales.html"))});

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "/public/views/vender.html"))});

    