const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(port || 3000, function (){
    console.log('Servidor corriendo en el puerto 3000');
});
