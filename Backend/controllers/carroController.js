
const { carro } = require('../data/db'); // usando los datos de prueba

const obtenerCarro = (req, res) => {
  res.json(carro);
};

const agregarProductoAlCarro = (req, res) => {
  const nuevoProducto = req.body;
  carro.push(nuevoProducto);
  res.status(201).json({ message: 'Producto agregado al carro', carro });
};

module.exports = {
  obtenerCarro,
  agregarProductoAlCarro
};