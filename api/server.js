const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const imageRoute = require('./routes/image.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('connected') },
    err => { console.log('Can not connect' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/image', imageRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('port: ' + port);
});