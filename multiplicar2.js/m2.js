const fs = require('fs');
let data = "";
let CrearArchivo = (numero) => {
    return new Promise((resolve, reject) => {

        if (!Number(numero)) {
            resolve("No es un numero");
            return;
        } else {

            for (let n = 1; n <= 10; n++) {

                data += `${numero} * ${n} =${numero*n}\n`;

            }
            fs.writeFile(`Tablas2/Tablita-${numero}`, data, (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve("El archivo a sido creado");
                }


            });



        }
    })
}
module.exports = {
    CrearArchivo
}