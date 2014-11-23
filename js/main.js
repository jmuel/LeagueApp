require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery/jquery',
        'react': 'libs/react/react',
        'JSXTransformer': 'libs/jsx-requirejs-plugin/js/JSXTransformer',
        'jsx': 'libs/jsx-requirejs-plugin/js/jsx',
        'underscore': 'libs/underscore/underscore',
        'text': 'libs/requirejs-text/text'
    }
});

(function(){
    'use strict';

    console.log(window.location.hash);

    var pageToHit = 'jsx!page';
    if(window.location.hash == '#test') {
        pageToHit = 'jsx!test';
    } else if (window.location.hash == '#test2') {
        pageToHit = 'jsx!test2';
    }
    require(['jquery', 'underscore', pageToHit], function($, _, page) {
        $(document).ready(_.partial(page.entrypoint, document.getElementById('root')));
    });

})();