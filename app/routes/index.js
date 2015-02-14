var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Famous App' });
});

router.get('/examples', function(req, res, next) {
    res.render('examples');
});

router.get('/university', function(req, res, next) {
    res.render('university');
});

router.get('/university/:id', function(req, res, next) {
    res.render('famous-template', { example: req.params.id});
});

module.exports = router;
