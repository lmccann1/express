var express = require('express');
var router = express.Router();

router.get('/signup', function (req, res) {

    res.write("<a href='/'>Home</a>");
    console.log('accessing signup page');
    res.end();

});
router.get('/login', function (req, res) {
    res.write("<a href='/'>Home</a>");
    console.log('going to login');
    res.end();

});

router.get('/inbox', function(req, res){
    res.write("<h1>Inbox Page</h1>");
    res.write("<a href='/'>Logout</a>");
    res.end();

});

router.get('/compose', function(req, res){
    res.write("<h1>compose</h1>")
    res.end();

});

router.get('/', function(req, res){

   res.write("<a href='/signup'>Sign up</a>");
   res.write("<a href='/login'>Login</a>");
   res.end();

});
module.exports = router;
