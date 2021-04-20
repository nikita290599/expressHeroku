var express = require('express');
var router = express.Router();
const fs = require('fs');
let jsonData = require('./response.json');
/* GET home page. */
router.get('/studentList', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    
});

module.exports = router;