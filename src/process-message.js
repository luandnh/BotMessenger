const fetch = require('node-fetch');
const processOpenWeatherAPI = require('./process-openweatherapi');
const processFaceBookUser = require('./process-facebook-user');
const WEATHER_DICTIONARY = [
    "nhiet do", "nhiet do hom nay", "nhiet do hien tai", "nhiet do bay gio"
];
const FORECAST_DICTIONARY = [
    "du doan", "du bao", "du doan nhiet do", "du doan thoi tiet", "du bao nhiet do", "du bao thoi tiet"
];
const HELLO_DICTIONARY = [
    "hi", "hello", "2", "xin chao", "chao", "chao ban", "help"
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
    if (FORECAST_DICTIONARY.includes(message)) {
        requestModel.type = "forecast";
        const responseMessage = await processOpenWeatherAPI(requestModel);
        return sendTextMessage(userId, responseMessage);
    }
    if (HELLO_DICTIONARY.includes(message)) {
        const fullName = await processFaceBookUser(userId);
        let responseMessage = `Chào ${fullName}! Hiện tại mình đang phát triển bot báo cáo thời tiết.`;
        responseMessage +='\nBạn cần mình giúp gì?';
        return sendTextMessage(userId, responseMessage);
    }
    return sendTextMessage(userId, "Bạn vui lòng thử lại!");
}
