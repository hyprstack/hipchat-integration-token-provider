/**
 * Created by mario (https://github.com/hyprstack) on 28/04/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();

router.post('/get-token', function (req, res) {
  console.log(req.headers['x-node-hipchat-logger-hmac-sha256']);
  if (req.headers.isOriginVerified) {
    res.status(200).send('123456789'); // fake token
    return;
  }
  var err = new Error('Invalid HMAC');
  res.status(401).send(err);
});

module.exports = router;