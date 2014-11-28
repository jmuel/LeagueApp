var React = require('react'),
    PrettyJSON = require('./PrettyJSON'),
    PlayerHistoryForm = require('./PlayerHistoryForm');

module.exports = React.createClass({
    render: function() {
        return (
            <PlayerHistoryForm />
        );
    }
});