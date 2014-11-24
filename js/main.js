require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery',
        'react': 'libs/react',
        'JSXTransformer': 'libs/JSXTransformer',
        'jsx': 'libs/jsx',
        'underscore': 'libs/underscore',
        'text': 'libs/text',
        'json': 'libs/json'
    }
});

(function(){
    'use strict';

    require(['jquery', 'underscore', 'jsx!page'], function($, _, page) {
        $(document).ready(_.partial(page.entrypoint, document.getElementById('root')));
    });

})();