var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('test');
    res.end();
});

router.listen(3000, function() {
    console.log('started');
});
