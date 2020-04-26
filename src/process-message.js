const fetch = require('node-fetch');
const processOpenWeatherAPI = require('./process-openweatherapi');
const processFaceBookUser = require('./process-facebook-user');
const emoji = require('node-emoji');
const WEATHER_DICTIONARY = [
    "!weather", "!today", "nhiet do", "nhiet do hom nay", "nhiet do hien tai", "nhiet do bay gio"
];
const FORECAST_TODAY_DICTIONARY = [
    "!forecast", "!forecasttoday", "du doan", "du bao", "du doan nhiet do", "du doan thoi tiet", "du bao nhiet do", "du bao thoi tiet"
];
const HELLO_DICTIONARY = [
    "hi", "hello", "2", "xin chao", "chao", "chao ban"
];
const HELP_DICTIONARY = [
    "help", "!help", "!command"
];
const sendTextMessage = (userId, text) => {
    var messageData = {
        "recipient": {
            "id": userId
        },
        "message": {
            "text": text
        }
    }
    return fetch(
        `https://graph.facebook.com/v5.0/me/messages?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(messageData),
    }
    ).catch(err => console.error(err));
};
module.exports = async (event) => {
    const userId = event.sender.id;
    let message = event.message.text.toLowerCase();
    message = message.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    let requestModel = {};
    requestModel.userId = userId;
    requestModel.message = message;
    if (WEATHER_DICTIONARY.includes(message)) {
        requestModel.type = "weather";
        const responseMessage = await processOpenWeatherAPI(requestModel);
        return sendTextMessage(userId, responseMessage);
    }
    if (message === "!forecast5day") {
        requestModel.type = "forecast_5day";
        const responseMessage = await processOpenWeatherAPI(requestModel);
        return sendTextMessage(userId, responseMessage);
    }
    if (FORECAST_TODAY_DICTIONARY.includes(message)) {
        requestModel.type = "forecast_today";
        const responseMessage = await processOpenWeatherAPI(requestModel);
        return sendTextMessage(userId, responseMessage);
    }
    if ((/!forecast (0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/g).test(message)) {
        requestModel.type = "forecast_date";
        const responseMessage = await processOpenWeatherAPI(requestModel);
        return sendTextMessage(userId, responseMessage);
    }
    if (HELLO_DICTIONARY.includes(message)) {
        const fullName = await processFaceBookUser(userId);
        let responseMessage = `Chào ${fullName}! Hiện tại mình đang phát triển bot báo cáo thời tiết.`;
        responseMessage += '\nBạn cần mình giúp gì?';
        return sendTextMessage(userId, responseMessage);
    }
    if (HELP_DICTIONARY.includes(message)) {
        let responseMessage = `${emoji.find('star').emoji} Đây là danh sách các lệnh để sử dụng ${emoji.find('star').emoji}`;
        responseMessage += `\n${emoji.find('triangular_flag_on_post').emoji} !command !help : Danh sách các lệnh.`;
        responseMessage += `\n${emoji.find('triangular_flag_on_post').emoji} !today !weather : Nhiệt độ và thời tiết ngày hôm nay.`;
        responseMessage += `\n${emoji.find('triangular_flag_on_post').emoji} !forecast !forecasttoday : Dự đoán nhiệt độ và thời tiết ngày hôm nay.`;
        responseMessage += `\n${emoji.find('triangular_flag_on_post').emoji} !forecast5day : Dự đoán nhiệt độ và thời tiết 5 ngày tiếp theo.`;
        return sendTextMessage(userId, responseMessage);
    }
    return sendTextMessage(userId, "Bạn vui lòng thử lại!");
}
