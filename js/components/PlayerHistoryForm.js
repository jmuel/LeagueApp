var React = require('react'),
    $ = require('jquery'),
    PrettyJSON = require('./PrettyJSON'),
    Match = require('./Match'),
    config = require('../config.json');

function getMatchHistory (data, that) {
    $.ajax({
        url:config.url + config.matchHistory + data[Object.keys(data)[0]].id,
        dataType: 'JSON',
        data: {
            endIndex: 10
        },
        success: function(data) {
            that.setState({matchData:data});
        }.bind(that),
        error: function() {
            console.error("failed to load match history");
        }.bind(that)
    });
}

function getPlayerId (that) {
    $.ajax({
        url: config.url + config.byName + that.state.playerName,
        dataType: 'JSON',
        success: function(data) {
            getMatchHistory(data, that);
        }.bind(that),
        error: function() {
            console.error("failed to load summoner id");
        }.bind(that)
    });
}

module.exports =  React.createClass({
    getInitialState: function() {
        return {playerName: 'NightBlue3'};
    },

    render: function() {
        var matches = {};
        if(this.state.matchData) {
            matches = this.state.matchData.matches.map(function(match) {
                return <Match match={match} />
            });
        }

        return (
            <div>
                <input type="text" value={this.state.playerName} name="name" onChange={this.handleChange} />
                <input type="button" onClick={this.updateSummoner} value="update" />
                <div>{matches}</div>
                <PrettyJSON value={this.state} />
            </div>
        )
    },

    handleChange: function(e) {
        this.setState({playerName: event.target.value});
    },

    updateSummoner: function() {
        getPlayerId(this);
    }
});