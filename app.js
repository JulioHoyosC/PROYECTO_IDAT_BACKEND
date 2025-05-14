
const express = require('express');
const app = express();

// Rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const carroRoutes = require('./routes/carroRoutes');
const ordenRoutes = require('./routes/ordenRoutes');

// Middleware para leer JSON
app.use(express.json());

// Conectar las rutas
app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/carro', carroRoutes);
app.use('/api/orden', ordenRoutes);

module.exports = app;