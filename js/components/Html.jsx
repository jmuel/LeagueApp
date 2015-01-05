'use strict;';

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="public/css/skeleton.css" />
                    <link rel="stylesheet" type="text/css" href="public/css/normalize.css" />
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                </body>
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script  src="public/js/LeagueApp.js"></script>
            </html>
        );
    }
});