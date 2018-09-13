var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var routes = require('./index.js')


var app = express();
app.use(express.parser());


var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'email'
});
//connection.connect()
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Database Connected');
s
});
global.db = db;

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

 app.get('/signup', function (req, res) {
  //res.write("<a href='/'>Home</a>");
  res.render('signup', {
        signup: 'signup form',

    });
    console.log('accessing signup page');

});
app.post('/user/add', function(req, res){
    var user ={
        username : req.body.username,
        password : req.body.password
    }

    var insertQuery = "INSERT INTO accounts (username, password) VALUES (?, ?)";

    res.send(connection.query(insertQuery, [user.username, user.password], function (err, rows){
        user.id = rows.insertId;

        return done(null, user);
    }));

    console.log(user);
    res.render('signup', {
        userValue : user,
        signup: 'signup form'
    });

});
app.get('/login', function(req, res){
   // res.write("<a href='/'>Home</a>");
    res.render('login',{
       login: 'LOGIN',
    });
    console.log('loginnnnnnn');
});
app.post('/user/login', function(req, res){

});





app.use(routes);
app.listen(5000, function(){
    console.log('server is running on port 5000');
})

