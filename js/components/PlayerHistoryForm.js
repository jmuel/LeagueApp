var React              = require('react'),
    $                  = require('jquery'),
    PrettyJSON         = require('./PrettyJSON'),
    Match              = require('./Match'),
    updateMatchHistory = require('../actions/updateMatchHistory');

module.exports =  React.createClass({
    getInitialState: function() {
        return {playerName: 'NightBlue3'};
    },

    render: function() {
        var matches = {};
        if(this.props.matchData) {
            matches = this.props.matchData.matches.map(function(match) {
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
        this.setState({playerName: e.target.value});
    },

    updateSummoner: function() {
        updateMatchHistory(this.state.playerName);
    }
});