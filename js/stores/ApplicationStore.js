'use strict';
var createStore = require('fluxible-app/utils/createStore');
var routesConfig = require('../config/routes');

var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: {
        'CHANGE_ROUTE_SUCCESS' : 'handleNavigate',
        'UPDATE_PAGE_TITLE': 'updatePageTitle'
    },
    initialize: function (dispatcher) {
        this.currentPageName = null;
        this.currentPage = null;
        this.currentRoute = null;
        this.pages = routesConfig;
        this.pageTitle = '';
    },
    handleNavigate: function (route) {
        var pageName = route.config.page;
        var page = this.pages[pageName];

        if (pageName === this.getCurrentPageName()) {
            return;
        }

        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        this.emit('change');
    },
    updatePageTitle: function (title) {
        this.pageTitle = title.pageTitle;
        this.emitChange();
    },
    getCurrentPageName: function () {
        return this.currentPageName;
    },
    getPageTitle: function () {
        return this.pageTitle;
    },
    getState: function () {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.route,
            pageTitle: this.pageTitle
        }
    },
    dehydrate: function () {
        return this.getState();
    },
    rehydrate: function (state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.route = state.routes;
        this.pageTitle = state.pageTitle;
    }
});

module.exports = ApplicationStore;