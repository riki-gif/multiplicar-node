const opciones = {
    numero: {
        demand: true,
        alias: 'n'
    },
    limite: {
        alias: 'l',
        default: 10,
    },
};
const argv = require("yargs").command('Listar', 'Imprime en consola la tabla de multiplicar', opciones).
command('Crear', 'Crea un archivo con la tabla de multiplicar', opciones).help().argv;


module.exports = {
    argv
}