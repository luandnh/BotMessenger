const fetch = require('node-fetch');
const moment = require('moment');
const emoji = require('node-emoji');
const weatherDictionary = require('../dictionaries/WEATHER_DICTIONARY');

const getWeatherFromCity = async cityId => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.OPENWEATHER_API_KEY}`)
        .catch(err => console.error(err));
    let data = await response.json();
    return data;
}
const getForeCastFromCity = async cityId => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.OPENWEATHER_API_KEY}`)
        .catch(err => console.error(err));
    let data = await response.json();
    return data;
}
module.exports = async (event) => {
    cityId = process.env.TPHCM_ID;
    let message = "Xin lỗi hiện tại không cập nhật thời tiết được!";
    try {
        if (event.type === "weather") {
            const weatherResponse = await getWeatherFromCity(cityId);
            if (weatherResponse) {
                let weatherResult = weatherDictionary(weatherResponse.weather[0].id);
                let weatherTemp = temperatureConverter(weatherResponse.main.temp);
                message = `${emoji.find('thermometer').emoji} Nhiệt độ hiện tại ở ${weatherResponse.name} là : ${weatherTemp}°C`;
                let weatherEmoji = emoji.find(weatherResult.icon);
                message += `\nKiểu thời tiết: ${weatherEmoji.emoji} ${weatherResult.main} ; Mô tả: ${weatherResult.description}`;
                return message;
            }
        }
        if (event.type === "forecast_5day") {
            const weatherResponse = await getForeCastFromCity(cityId);
            const weatherList = weatherResponse.list;
            let weatherResultList = {};
            message = `${emoji.find('star').emoji} Dự đoán thời tiết của 5 ngày sắp tới ${emoji.find('star').emoji}`;
            for (let i = 0; i < weatherList.length; i++) {
                let dt = moment(weatherList[i].dt_txt, "YYYY-MM-DD HH:mm:ss");
                let dtKey = moment(dt).format('DD-MM-YYYY');
                if (!weatherResultList.hasOwnProperty(dtKey)) {
                    weatherResultList[dtKey] = {
                        tempMax: temperatureConverter(weatherList[i].main.temp_max),
                        tempMin: temperatureConverter(weatherList[i].main.temp_min),
                        id: weatherList[i].weather[0].id
                    };
                } else {
                    if (weatherList[i].dt_txt.includes("09:00:00")) {
                        weatherResultList[dtKey].id = weatherList[i].weather[0].id;
                    }
                    let tempCheckMax = temperatureConverter(weatherList[i].main.temp_max);
                    let tempCheckMin = temperatureConverter(weatherList[i].main.temp_min);
                    if (tempCheckMax > weatherResultList[dtKey].tempMax) {
                        weatherResultList[dtKey].tempMax = tempCheckMax;
                    }
                    if (tempCheckMin < weatherResultList[dtKey].tempMin) {
                        weatherResultList[dtKey].tempMin = tempCheckMin;
                    }
                }
            }
            let currentDate = moment().format('DD-MM-YYYY');
            delete weatherResultList[currentDate];
            Object.keys(weatherResultList).forEach(key => {
                message += `\n ${emoji.find('clock3').emoji} Ngày ${key}`;
                message += `\n${emoji.find('thermometer').emoji} Nhiệt độ cao nhất ${weatherResultList[key].tempMax}°C | Nhiệt độ thấp nhất ${weatherResultList[key].tempMin}°C`;
                let weatherResult = weatherDictionary(weatherResultList[key].id);
                let weatherEmoji = emoji.find(weatherResult.icon);
                message += `\nKiểu thời tiết: ${weatherEmoji.emoji} ${weatherResult.main} ; Mô tả: ${weatherResult.description}`;
            });
            return message;
        }
        if (event.type === "forecast_today") {
            const weatherResponse = await getForeCastFromCity(cityId);
            const weatherList = weatherResponse.list;
            let weatherResultList = {};
            message = `${emoji.find('star').emoji} Dự đoán thời tiết của ngày hôm nay ${emoji.find('star').emoji}`;
            let currentDate = moment().format('DD-MM-YYYY');
            for (let i = 0; i < weatherList.length; i++) {
                let dt = moment(weatherList[i].dt_txt, "YYYY-MM-DD HH:mm:ss");
                let dtKey = moment(dt).format('DD-MM-YYYY HH:mm:ss');
                if (dtKey.includes(currentDate) && dt.isSameOrAfter(moment())) {
                    weatherResultList[dtKey] = {
                        tempMax: temperatureConverter(weatherList[i].main.temp_max),
                        tempMin: temperatureConverter(weatherList[i].main.temp_min),
                        id: weatherList[i].weather[0].id
                    };
                }
            }
            Object.keys(weatherResultList).forEach(key => {
                message += `\n ${emoji.find('clock3').emoji} Thời gian ${key}`;
                message += `\n${emoji.find('thermometer').emoji} Nhiệt độ cao nhất ${weatherResultList[key].tempMax}°C | Nhiệt độ thấp nhất ${weatherResultList[key].tempMin}°C`;
                let weatherResult = weatherDictionary(weatherResultList[key].id);
                let weatherEmoji = emoji.find(weatherResult.icon);
                message += `\nKiểu thời tiết: ${weatherEmoji.emoji} ${weatherResult.main} ; Mô tả: ${weatherResult.description}`;
            });
            return message;
        }
        if (event.type === "forecast_date") {
            const messageProgress = event.message.split(" ");
            const forecastDate = messageProgress[1];
            const forecastDateMoment = moment(forecastDate, "DD-MM-YYYY");
            const checkAfterDate = moment().add('days',5);
            if(forecastDateMoment.isAfter(checkAfterDate) || forecastDateMoment.isBefore(moment())){
                return "Mình chỉ dự báo thời gian trong 5 ngày sắp tới! Xin lỗi bạn!";
            }
            const weatherResponse = await getForeCastFromCity(cityId);
            const weatherList = weatherResponse.list;
            let weatherResultList = {};
            message = `${emoji.find('star').emoji} Dự đoán thời tiết của ngày ${forecastDate} ${emoji.find('star').emoji}`;
            for (let i = 0; i < weatherList.length; i++) {
                let dt = moment(weatherList[i].dt_txt, "YYYY-MM-DD HH:mm:ss");
                let dtKey = moment(dt).format('DD-MM-YYYY HH:mm:ss');
                if (dtKey.includes(forecastDate)) {
                    weatherResultList[dtKey] = {
                        tempMax: temperatureConverter(weatherList[i].main.temp_max),
                        tempMin: temperatureConverter(weatherList[i].main.temp_min),
                        id: weatherList[i].weather[0].id
                    };
                }
            }
            Object.keys(weatherResultList).forEach(key => {
                message += `\n ${emoji.find('clock3').emoji} Thời gian ${key}`;
                message += `\n${emoji.find('thermometer').emoji} Nhiệt độ cao nhất ${weatherResultList[key].tempMax}°C | Nhiệt độ thấp nhất ${weatherResultList[key].tempMin}°C`;
                let weatherResult = weatherDictionary(weatherResultList[key].id);
                let weatherEmoji = emoji.find(weatherResult.icon);
                message += `\nKiểu thời tiết: ${weatherEmoji.emoji} ${weatherResult.main} ; Mô tả: ${weatherResult.description}`;
            });
            return message;
        }
    } catch (err) {
        console.log(err);
    }
    return message;
}
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    return (valNum - 273.15).toFixed(1);
}