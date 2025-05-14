
const express = require('express');
const app = express();


const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const carroRoutes = require('./routes/carroRoutes');
const ordenRoutes = require('./routes/ordenRoutes');


app.use(express.json());


app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/carro', carroRoutes);
app.use('/api/orden', ordenRoutes);

module.exports = app;