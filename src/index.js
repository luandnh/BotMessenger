require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const bodyParser = require('body-parser');

const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`));

app.get('/',verifyWebhook);

app.post('/',messageWebhook);