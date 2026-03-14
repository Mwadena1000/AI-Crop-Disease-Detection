const axios = require('axios');

const getWeatherData = async (city) => {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Could not fetch weather data');
    }
};

module.exports = { getWeatherData };
