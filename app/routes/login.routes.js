module.exports = app => {
    var router = require("express")();
    var path = require('path');
    
    // login stránka
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname+'/../../public/login/login.html'));
    });
    // login css
    app.get('/public/login/signin.css', function(req, res) {
        res.sendFile(path.join(__dirname+'/../../public/login/signin.css'));
    });
    // logo
    app.get('/public/images/js_logo.png', function(req, res) {
        res.sendFile(path.join(__dirname+'/../../public/images/js_logo.png'));
    });
    // Favicon
    app.get('/public/images/favicon.ico', function(req, res) {
        res.sendFile(path.join(__dirname+'/../../public/images/favicon.ico'));
    });
}