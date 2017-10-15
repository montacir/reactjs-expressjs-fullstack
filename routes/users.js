var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    	_id: 1,
    	name:'Momo'
    }]);
});

module.exports = router;
