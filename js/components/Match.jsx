var React = require('react');

module.exports =  React.createClass({
    render: function() {
        var stats = this.props.match.participants[0].stats;
        var kda = (stats.kills + stats.assists) / stats.assists;
        return (
            <div key={this.props.match.matchId}>
                <span>{this.props.match.queueType}</span>
                <span> KDA: {kda.toFixed(2)}</span>
                <span> Won: {stats.winner.toString()}</span>
            </div>
        );
    }
});