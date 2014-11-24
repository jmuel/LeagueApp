/** @jsx React.DOM */
define(['react', 'jquery', 'json!config.json', 'jsx!PrettyJSON', ], function(React, $, config, PrettyJSON) {

    var Match = React.createClass({
        getInitialState: function() {
            return { match: this.props.match};
        },
        render: function() {
            var stats = this.state.match.participants[0].stats;
            console.log(stats);
            return (
                <div key={this.state.match.matchId}>
                    <span>{this.state.match.queueType}</span>
                    <span> KDA: {(stats.kills + stats.assists) / stats.assists}</span>
                </div>
            )
        }

    });

    return React.createClass({
        getInitialState: function() {
            return {playerName: 'Xaivous'};
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
            this.setState({playerName: event.target.value})
        },
        updateSummoner: function() {
            $.ajax({
                url: config.url + config.byName + this.state.playerName,
                dataType: 'JSON',
                success: function(data) {
                    $.ajax({
                        url:config.url + config.matchHistory + data[Object.keys(data)[0]].id,
                        dataType: 'JSON',
                        data: {
                            endIndex: 10
                        },
                        success: function(data) {
                            this.setState({matchData:data});
                        }.bind(this),
                        error: function() {
                            console.error("failed to load match history");
                        }.bind(this)
                    });
                }.bind(this),
                error: function() {
                    console.error("failed to load summoner id");
                }.bind(this)
            });
        }
    });
});