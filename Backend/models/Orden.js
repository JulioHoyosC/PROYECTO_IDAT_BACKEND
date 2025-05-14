class Orden {
    constructor(id, usuarioId, elementos, total, estado = 'pendiente') {
        this.id = id;
        this.usuarioId = usuarioId;
        this.elementos = elementos;
        this.total =total;
        this.estado = estado;
    }
}

module.exports = Orden;