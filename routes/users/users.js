var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup',  function(req, res) {

  //use middleware for this signup
  
  //if successfull redirect or render a page

})

module.exports = router;