const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'e0a15bcc8cmsh316e5ed7963167bp19dc00jsndf6fd08acd69' }
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        long: data.lon
    };
}

module.exports = {
    getLugarLatLong
}