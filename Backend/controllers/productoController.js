const obtenerProductos = (req, res) => {
    res.json({ mensaje: 'Lista de productos' });
  };
  
  const agregarProducto = (req, res) => {
    res.status(201).json({ mensaje: 'Producto agregado' });
  };
  
  module.exports = {
    obtenerProductos,
    agregarProducto
  };