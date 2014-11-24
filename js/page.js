/** @jsx React.DOM */
define(['react', 'jsx!PlayerHistoryForm'],
   function(React, PlayerHistoryForm) {
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