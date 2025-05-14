
const { usuarios } = require('../data/db');

exports.registrarUsuario = (req, res) => {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }
  const nuevoUsuario = { id: Date.now(), nombre, email, password };
  usuarios.push(nuevoUsuario);

  res.status(201).json({ mensaje: 'Usuario registrado con éxito', usuario: nuevoUsuario });
};

exports.obtenerUsuarios = (req, res) => {
  res.status(200).json(usuarios);
};