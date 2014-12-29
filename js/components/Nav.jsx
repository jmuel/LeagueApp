'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;

var Nav = React.createClass({
    getInitialState: function () {
        return {
            selected: 'home',
            links: {}
        }
    },
    render: function() {
        var links = this.props.links || this.state.links,
            context = this.props.context,
            linkHTML = Object.keys(links).map(function (name) {
                var link = links[name];
                return (
                    <li key={link.path}>
                        <NavLink routeName={link.page} context={context}>{link.label}</NavLink>
                    </li>
                );
            });
        return (
            <ul>{linkHTML}</ul>
        );
    }
});