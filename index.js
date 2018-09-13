var express = require('express');
var router = express.Router();

// router.get('/', function (req,res){
//    // res.render('index', {title: ''});
//
// });
router.get('/signup', function (req, res) {

   // res.render('test', {
   //   signup: 'signup form',

  //  });
    res.write("<a href='/'>Home</a>");
    console.log('accessing signup page');
    res.end();

});
router.get('/login', function (req, res) {
    res.write("<a href='/'>Home</a>");
    console.log('going to login');
    res.end();

})



router.get('/', function(req, res){

   res.write("<a href='/signup'>Sign up</a>");
   res.write("<a href='/login'>Login</a>");
   res.end();

});
module.exports = router;
