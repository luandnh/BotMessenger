require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const bodyParser = require('body-parser');

const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`));

app.get('/', verifyWebhook);
app.get('/license', function (req, res) {
    res.render('index.html');
});
app.post('/', messageWebhook);