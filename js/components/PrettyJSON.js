var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <pre>{JSON.stringify(this.props.value, undefined, 2)}</pre>
        );
    }
});