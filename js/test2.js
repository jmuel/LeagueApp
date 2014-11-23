/** @jsx React.DOM */
define(['react'], function(React) {
    'use strict';

    function entrypoint(rootEl) {
        React.render(<p>test 2</p>, rootEl);
    }

    return {
        entrypoint: entrypoint
    };
});