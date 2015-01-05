'use strict';

var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');
var RouterMixin = require('flux-router-component').RouterMixin;
var StoreMixin = require('fluxible-app').StoreMixin;
var Home = require('./Home.jsx');
var MatchHistory = require('./MatchHistory.jsx');
var Nav = require('./Nav.jsx');

var Application = React.createClass({
    mixins: [RouterMixin, StoreMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function () {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function () {
        var state = this.getStore(ApplicationStore).getState();
        this.setState(state);
    },
    render: function () {
        var output = '';
        switch (this.state.currentPageName) {
            case 'home':
                output = <Home />;
                break;
            case 'matchHistory':
                output = <MatchHistory context={this.props.context} />;
                break;
        }

        return (
            <div>
                {output}
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

module.exports = Application;