var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var routes = require('./index.js');
var app = express();

var session = require('express-session');
app.use(session({
    secret: 'my secret'
  //  saveUninitialized: true,
   // cookie: { maxAge: 60000}
}))

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'email'
});

conn.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Database Connected');
});

global.conn = conn;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/inbox', function (req, res) {
    res.render('inbox', {
        inbox: 'INBOX',
    });
    console.log('iboxxxxxx');
});


app.get('/signup', function (req, res) {
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

    res.send(conn.query(insertQuery, [user.username, user.password], function (err, rows){
        user.id = rows.insertId;

        //return done(null, user);
    }));

    console.log(user);
    res.render('signup', {
        userValue : user,
        signup: 'signup form'
    });

});
app.get('/login', function(req, res){
    res.render('login',{
       login: 'LOGIN',
    });
    console.log('loginnnnnnn');
});
app.post('/user/login', function(req, res){

   // var message = '';
    var s = req.session;

    var user ={
        username : req.body.username,
        password : req.body.password
    }

    var selectQuery = "SELECT User_id, username FROM `accounts` WHERE username = '"+user.username+"' and password = '"+user.password+"'";
    conn.query(selectQuery, function(err, results){
        if(results.length){
            s.req.session.User_id = results[0].id;
            s.req.session.user = results[0];
            console.log(results[0].id);
            console.log(s.req.session.user);
            res.redirect('/inbox');
        }
        // else{
        //     message = "wrong login details"
        //     res.render('login.ejs', {message: message});
        //
        // }

    });

});



app.use(routes);
app.listen(5000, function(){
    console.log('server is running on port 5000');
})
