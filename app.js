'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./routes/routes');
var crypto = require('crypto');

app.use(bodyParser.json({
  verify: function (req, res, buf, encoding) {
    var originHAMC = req.get('x-node-hipchat-logger-hmac-sha256');
    if (originHAMC) {
      var message = buf.toString(encoding);
      var sharedSecret = 'xx123aardvaark321xx';
      var digest = crypto.createHmac('SHA256', sharedSecret).update(message).digest('base64');
      var condition = (digest === originHAMC);
      req.headers.isOriginVerified = condition;
    }
  }
}));

app.use(router);
module.exports = app;
