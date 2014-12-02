var React = require('react'),
    $ = require('jquery'),
    PrettyJSON = require('./PrettyJSON'),
    Match = require('./Match'),
    config = require('../config.json'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    PaperButton = mui.PaperButton,
    Paper = mui.Paper,
    Input = mui.Input;

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
        return {};
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
                <h2 className="mui-font-style-headline">Toolbars</h2>
                <div>
                    <Toolbar>
                        <ToolbarGroup key={0} float="left">
                            <Input ref="playerName" type="text" name="firstName"
                                description="The Summoner you wish to look up"
                                value={this.state.playerName} name="name" onChange={this.handleChange} />
                        </ToolbarGroup>
                        <ToolbarGroup key={1} float="right">
                            <PaperButton onClick={this.updateSummoner} label="Update" primary={true}/>
                        </ToolbarGroup>
                    </Toolbar>

                    <Paper zDepth={1}>
                        <div>{matches}</div>
                    </Paper>


                </div>
            </div>
        )
    },

    handleChange: function() {
        this.setState({playerName: event.target.value});
    },

    updateSummoner: function() {
        getPlayerId(this);
    }
});