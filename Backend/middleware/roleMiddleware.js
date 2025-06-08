const verificarRol = (rolRequerido) => {
    return (req, res, next) => {
      if (!req.usuario || req.usuario.rol !== rolRequerido) {
        return res.status(403).json({ mensaje: 'Acceso denegado: rol insuficiente' });
      }
      next();
    };
  };
  
  module.exports = verificarRol;
  