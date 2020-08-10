const argv = require('./config/yargs.js').argv;
//const colors = require(' colors ');
const { CrearArchivo, listartablas } = require('./multiplicar/m.js');

//let numero = 6;
//let argv2 = process.argv;
/*let parametro = argv[2];
let numero = parametro.split('=')[1];*/

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listartablas(argv.numero, argv.limite);
        break;
    case 'Crear':
        CrearArchivo(argv.numero, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado`);
            }).catch((err) => { console.log(err) });
        break;
    default:
        console.log("No existe esta opcion");
        break;
}



//console.log(argv);