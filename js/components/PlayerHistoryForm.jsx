var React              = require('react'),
    PrettyJSON         = require('./PrettyJSON.jsx'),
    Match              = require('./Match.jsx'),
    UpdateMatchHistory = require('../actions/UpdateMatchHistory'),
    StoreMixin         = require('fluxible-app').StoreMixin;

module.exports =  React.createClass({
    mixins: [StoreMixin],

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
                <input type="button" className="button-primary" onClick={this.updateSummoner} value="update" />
                <div>{matches}</div>
                <PrettyJSON value={this.state} />
            </div>
        )
    },

    handleChange: function(e) {
        this.setState({playerName: e.target.value});
    },

    updateSummoner: function() {
        this.props.context.executeAction(UpdateMatchHistory, this.state.playerName);
    }
});