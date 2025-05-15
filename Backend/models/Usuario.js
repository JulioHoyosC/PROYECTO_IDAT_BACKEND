const { registrarUsuario } = require("../controllers/usuarioController");

class Usuario {
    constructor(id ,nombre, email, password,role = 'customer'){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this._password = password;
        this.role = role;
    }
}



module.exports = Usuario;