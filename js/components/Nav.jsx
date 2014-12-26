'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;

var Nav = react.createClass({
    getInitialState: function () {
        return {
            selected: 'home',
            links: {}
        }
    },
    render: function() {
        var selected = this.props.selected || this.state.selected,
            links = this.props.links || this.state.links,
            context = this.props.context,
            linkHTML = Object.keys(links).map(function (name) {
                var className = '',
                    link = links[name];
                if(selected === name) {
                    className = 'selected';
                }
                return (
                    <li className={className} key={link.path}>
                        <NavLink routeName={link.page} context={context}>{link.label}</NavLink>
                    </li>
                );
            });
        return (
            <ul>{linkHTML}</ul>
        );
    }
});