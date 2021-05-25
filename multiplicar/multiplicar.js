const fs = require('fs'); //paquete nativos que se instalan automaticamente
//const fs = require('express'); paquete que no son nativos
//const fs = require('fs');archivos que creamos nosotros


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} debe ser numerico`);
            return;
        }

        let data = '';

        for (let index = 0; index <= 10; index++) {
            data += `${base}*${index} = ${base*index}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}