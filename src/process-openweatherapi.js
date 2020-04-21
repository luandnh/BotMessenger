const fetch = require('node-fetch');
const getWeatherFromCity = async cityId => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.OPENWEATHER_API_KEY}`)
        .catch(err => console.error(err));
    let data = await response.json();
    return data;
}
module.exports = async (event) => {
    cityId = process.env.TPHCM_ID;
    let message = "Xin lỗi hiện tại không cập nhật thời tiết được!";
    const weatherResponse = await getWeatherFromCity(cityId);
    if (weatherResponse) {
        message = `Nhiệt độ hiện tại tại ${weatherResponse.name} là : ${weatherResponse.main.temp}`
    }
    return message;
}