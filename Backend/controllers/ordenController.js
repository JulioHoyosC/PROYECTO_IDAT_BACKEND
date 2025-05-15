
const crearOrden = (req, res) => {

  res.status(201).json({ mensaje: 'Orden creada correctamente' });
};

module.exports = { crearOrden };