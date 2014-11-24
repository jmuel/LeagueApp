/** @jsx React.DOM */
define(['react', 'jquery', 'json!config.json', 'jsx!PrettyJSON', 'jsx!Match'], function(React, $, config, PrettyJSON, Match) {


    return React.createClass({
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