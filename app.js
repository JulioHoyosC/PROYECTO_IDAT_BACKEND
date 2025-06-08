const express = require('express');
const app = express();
const connectDB = require('./config/db'); // ✅ Solo una vez
require('dotenv').config(); // Carga variables del .env

connectDB(); // Conecta con MongoDB antes de levantar las rutas

const usuarioRoutes = require('./Backend/routes/usuarioRoutes');
const productoRoutes = require('./Backend/routes/productoRoutes');
const carroRoutes = require('./Backend/routes/carroRoutes');
const ordenRoutes = require('./Backend/routes/ordenRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/carro', carroRoutes);
app.use('/api/orden', ordenRoutes);
app.use('/api/routes', authRoutes);

module.exports = app;
