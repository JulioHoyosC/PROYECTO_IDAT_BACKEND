const usuarios = [{ id: 1, nombre: 'Juan', email: 'juan@example.com', password: '123456' },
                 { id: 2, nombre: 'Maria', email: 'maria@xample.com', password: 'abcde' },];


const productos = [{ id: 1, nombre: 'Pecho broasther', categoria: 'Broasther', precio: 16.00 },
                  { id: 2, nombre: 'Alita broasther', categoria: 'Broasther', precio: 11.00 },];
const ordenes = []
const carrito= [ { id: 1, nombre: 'Pecho broasther', precio: 16.00, cantidad: 2 },
                { id: 2, nombre: 'Alita broasther', precio: 11.00, cantidad: 1 },]

module.exports = {
    usuarios,
    productos,
    ordenes,
    carrito
}
module.exports = { productos }