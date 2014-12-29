module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        label: 'Home',
        action: function(context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', {pageTitle: 'Home'});
            done();
        }
    },

    matchHistory: {
        path: '/matchHistory',
        method: 'get',
        page: 'matchHistory',
        label: 'MatchHistory',
        action: function(context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', {pageTitle: 'MatchHistory'});
            done();
        }
    }
}