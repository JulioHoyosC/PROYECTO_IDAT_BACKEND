
const express = require('express');
const app = express();


const usuarioRoutes = require('./Backend/routes/usuarioRoutes');
const productoRoutes = require('./Backend/routes/productoRoutes');
const carroRoutes = require('./Backend/routes/carroRoutes');
const ordenRoutes = require('./Backend/routes/ordenRoutes');


app.use(express.json());


app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/carro', carroRoutes);
app.use('/api/orden', ordenRoutes);

module.exports = app;