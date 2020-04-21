const processMessage = require('./process-message');
module.exports =  (req, res) => {
    if (req.body.object === 'page') {
        req.body.entry.forEach(entry => {
            entry.messaging.forEach( async event => {
                if (event.message && event.message.text) {
                    console.log("Sender id: " + event.sender.id);
                    console.log("Message: " + event.message.text);
                    await processMessage(event);
                }
            });
        });
        res.status(200).end();
    }
}