const fs = require('fs');
//const colors = require(' colors ');

let data = "";
let listartablas = (numero, limite = 10) => {

    for (let n = 1; n <= limite; n++) {
        console.log(`${numero}* ${n} =${numero*n}`);
    }
}
let CrearArchivo = (numero, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(numero)) {
            resolve(`No es un numero ${numero} `);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${numero} *${i} = ${numero * i }\n `;
        };
        fs.writeFile(`Tablas/Tablita-${numero}_al_${limite}`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("El archivo ha sido creado");
            };
        });
    })
}
module.exports = {
        CrearArchivo,
        listartablas,
    }
    /*module.exports = {
    CrearArchivo,
    listartablas,
    }*/