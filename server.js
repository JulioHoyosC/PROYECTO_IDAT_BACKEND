const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const carroRoutes = require('./routes/carroRoutes');
const ordenRoutes = require('./routes/ordenRoutes');

app.use('/api/users', usuarioRoutes);
app.use('/api/products', productoRoutes);
app.use('/api/cart', carroRoutes);
app.use('/api/orders', ordenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});