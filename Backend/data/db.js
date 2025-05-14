const usuario = []
const producto = []
const orden = []
const carro = []

module.exports = {
    usuario,
    producto,
    orden,
    carro
}
let carrito = [
    { id: 1, nombre: 'Pecho broasther', precio: 16.00, cantidad: 2 },
    { id: 2, nombre: 'Alita broasther', precio: 11.00, cantidad: 1 },
];

let productos = [
    { id: 1, nombre: 'Pecho broasther', categoria: 'Broasther', precio: 16.00 },
    { id: 2, nombre: 'Alita broasther', categoria: 'Broasther', precio: 11.00 },
  ];
  
  module.exports = { productos };