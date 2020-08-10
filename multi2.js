const { CrearArchivo } = require('./multiplicar2/m2.js');

let argv = process.argv;
let parametro = argv[2];
let numero = parametro.split('=')[1];


/*CrearArchivo(numero)
    .then(archivo => { console.log(archivo) })
    .catch(e => { console.log(e) }); */