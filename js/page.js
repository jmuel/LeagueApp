/** @jsx React.DOM */
define(['react', 'underscore', 'jsx!PrettyJSON'], function(React, _, PrettyJSON) {
   'use strict';

   var App = React.createClass({
      getInitialState: function() {
         return {a: '', b: ''}
      },
      render: function() {
         return (<PrettyJSON value={this.state} />);
      }
   });

   function entrypoint(rootEl) {
      React.render(<App />, rootEl);
   }

   return {
      entrypoint: entrypoint
   }

});