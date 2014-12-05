var React = require('react'),
    $ = require('jquery'),
    PrettyJSON = require('./PrettyJSON'),
    Match = require('./Match'),
    config = require('../config.json'),
    Q = require('q');

function getMatchHistory (id) {
    return Q($.ajax({
        url: config.url + config.matchHistory + id,
        dataType: 'JSON',
        data: {
            endIndex: 10
        }
    }));
}

function getPlayerId (playerName) {
    return Q($.ajax({
        url: config.url + config.byName + playerName,
        dataType: 'JSON'
    }));
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
        var _this = this;
        getPlayerId(_this.state.playerName)
            .then(function(data) {
                return data[Object.keys(data)[0]].id;
            })
            .then(getMatchHistory)
            .then(function(matchHistory) {
                _this.setState({matchData: matchHistory});
                return matchHistory;
            })
            .catch(function(error) {
                console.log(error);
            })
    }
});