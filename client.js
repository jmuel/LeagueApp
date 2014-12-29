'use strict';
var React = require('react');
var app = require('./app');
var dehydratedState = App;

window.React = React;

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }

    window.context = context;
    var mountNode = document.getElementById('root');

    React.render(app.getAppComponent()({
        context: context.getComponentContext()
    }), mountNode);

});