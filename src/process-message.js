const fetch = require('node-fetch');
const processOpenWeatherAPI = require('./process-openweatherapi');
const DICTIONARY = [
    "Nhiệt độ hôm nay", "Nhiệt độ hiện tại", "Nhiệt độ bây giờ"
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
    const message = event.message.text;
    if(DICTIONARY.includes(message)){
        const responseMessage = await processOpenWeatherAPI(event);
        return sendTextMessage(userId, responseMessage);
    }

    return sendTextMessage(userId, "Bạn vui lòng thử lại!");
}
