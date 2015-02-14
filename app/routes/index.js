var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Famous App' });
});

router.get('/examples', function(req, res, next) {
    res.render('examples');
});

module.exports = router;
