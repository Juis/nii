(function(){
    var express = require('express'),
        load = require('express-load'),
        http = require('http'),
        path = require('path'),
        db = require('mongoose');

    //mongoose begin
    var connect = function () { 
        db.connect('mongodb://localhost/data/nii', { server: { socketOptions: { keepAlive: 1 } } }) 
        db.connection.on('error', function (err) { console.log(err) })
        db.connection.on('disconnected', function () { connect() })
    };
    connect();
    // mongoose end

    var app = express();

    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }

    load('models').then('controllers').then('routes').into(app);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('<<< servidor conectado >>>');
    });
})();
