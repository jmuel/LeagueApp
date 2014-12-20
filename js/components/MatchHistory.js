var React             = require('react'),
    matchHistoryStore = require('../stores/matchHistoryStore'),
    PlayerHistoryForm = require('./PlayerHistoryForm');

module.exports = React.createClass({
    getInitialState: function() {
        return {matchData: null};
    },

    render: function() {
        return (
            <div className="container">
                <PlayerHistoryForm matchData={this.state.matchData}/>
            </div>
        );
    },

    matchHistoryChange: function(matchHistory) {
        this.setState({matchData: matchHistory});
    },

    componentDidMount: function() {
        this.unsubscribe = matchHistoryStore.listen(this.matchHistoryChange)
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    }
});