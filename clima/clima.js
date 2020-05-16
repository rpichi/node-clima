const axios = require('axios');

const getClima = async(lat, long) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c8284e11b2e18f96f0e9138842189a97&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}