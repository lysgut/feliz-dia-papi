const express = require('express')
app = express(); 
const path = require('path');
const port = 4500
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
    });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'publics')));

app.use('/', (req, res) => {res.render('index', {showPopup: true})})