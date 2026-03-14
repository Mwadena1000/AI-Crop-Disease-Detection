const { getWeatherData } = require('../services/weatherService');

// @desc    Get weather for a city
// @route   GET /api/weather/:city
// @access  Private
const getWeather = async (req, res) => {
    try {
        const city = req.params.city || 'Nairobi'; // Default to Nairobi
        const data = await getWeatherData(city);
        res.json(data);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

module.exports = { getWeather };
