'user strict';

require('node-jsx').install({extension: '.jsx'});
var express = require('express');
var serialize = require('serialize-javascript');
var navigateAction = require('flux-router-component').navigateAction;
var React = require('react');
var app = require('./app');
var HtmlComponent = React.createFactory(require('./js/components/Html'));

var server = express();
server.use('/public', express.static(__dirname + '/dist'));

server.use(function(req, res, next) {
    var context = app.createContext()

    context.getActionContext().executeAction(navigateAction, {
        url: req.url
    }, function (err) {
        if (err) {
            if (err.status && err.status === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        var AppComponent = app.getAppComponent();
        var html = React.renderToStaticMarkup(HtmlComponent({
            state: exposed,
            context: context.getComponentContext(),
            markup: React.renderToString(AppComponent({
                context: context.getComponentContext()
            }))
        }));

        res.write(html);
        res.end();
    });

});


var port = process.env.PORT || 1776;
server.listen(port);
console.log('Listening on port ' + port);