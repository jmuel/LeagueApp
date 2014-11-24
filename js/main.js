require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery/jquery',
        'react': 'libs/react/react',
        'JSXTransformer': 'libs/jsx-requirejs-plugin/js/JSXTransformer',
        'jsx': 'libs/jsx-requirejs-plugin/js/jsx',
        'underscore': 'libs/underscore/underscore',
        'text': 'libs/requirejs-text/text',
        'json': 'libs/requirejs-json/json'
    }
});

(function(){
    'use strict';

    require(['jquery', 'underscore', 'jsx!page'], function($, _, page) {
        $(document).ready(_.partial(page.entrypoint, document.getElementById('root')));
    });

})();