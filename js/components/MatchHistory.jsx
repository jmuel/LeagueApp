'use strict';
var React             = require('react'),
    MatchHistoryStore = require('../stores/MatchHistoryStore'),
    PlayerHistoryForm = require('./PlayerHistoryForm.jsx'),
    StoreMixin        = require('fluxible-app').StoreMixin;

module.exports = React.createClass({
    mixins: [StoreMixin],
    statics: {
        storeListeners: [MatchHistoryStore]
    },
    getInitialState: function() {
        return this.getStore(MatchHistoryStore).getState();
    },

    render: function() {
        return (
            <div className="container">
                <PlayerHistoryForm matchData={this.state.matchData}/>
            </div>
        );
    },

    onChange: function () {
        this.setState(
            this.getStore(MatchHistoryStore).getState()
        );
    }
});