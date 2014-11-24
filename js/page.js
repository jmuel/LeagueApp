/** @jsx React.DOM */
define(['react', 'underscore', 'jquery', 'jsx!PlayerHistoryForm'],
   function(React, _, $,  PlayerHistoryForm) {
   'use strict';

   var App = React.createClass({
      render: function() {
         return (
            <PlayerHistoryForm />
         );
      }
   });

   function entrypoint(rootEl) {
      React.render(<App />, rootEl);
   }

   return {
      entrypoint: entrypoint
   }

});