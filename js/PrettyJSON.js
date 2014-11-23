/** @jsx React.DOM */

define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return (
                <pre>{JSON.stringify(this.props.value, undefined, 2)}</pre>
            );
        }
    });
});

