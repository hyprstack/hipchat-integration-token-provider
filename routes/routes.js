/**
 * Created by mario (https://github.com/hyprstack) on 28/04/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();

router.get('/get-token', function (req, res) {
  if (req.headers.isOriginVerified) {
    res.status(200).send('123456789'); // fake token
  }
  var err = 'Invalid HMAC';
  res.status(401).send({error: err});
});

module.exports = router;