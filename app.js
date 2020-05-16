const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección a solicitar',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(result => console.log(result));

// clima.getClima(8.79, -75.86).then(res => console.log(res)).catch(err => console.log(err));


const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coord.lat, coord.long);
        return `El clima de ${coord.direccion} es ${temp}`;
    } catch (err) {
        return err;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);