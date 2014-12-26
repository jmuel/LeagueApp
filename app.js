'use strict';

var FluxibleApp = require('fluxible-app');
var React = require('react');
var routrPlugin = require('fluxible-plugin-routr');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./js/components/Application.jsx'))
});

app.plug(routrPlugin({
    routes: require('./js/config/routes')
}));

app.registerStore(require('./js/stores/ApplicationStore'));

module.exports = app;