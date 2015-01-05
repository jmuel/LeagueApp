'use strict';

var createStore         = require('fluxible-app/utils/createStore'),
    MatchHistoryService = require('../services/MatchHistoryService');



var MatchHistoryStore = createStore({
    storeName: 'MatchHistoryStore',
    handlers: {
        'UPDATE_MATCH_HISTORY' : 'handleMatchHistoryChange'
    },
    initialize: function () {
        this.matchHistory = {};
    },
    handleMatchHistoryChange: function (playerName) {
        var _this = this;
        MatchHistoryService.getPlayerId(playerName)
            .then(MatchHistoryService.getIdFromDirtyJson)
            .then(MatchHistoryService.getMatchHistory)
            .then(function(matchHistory) {
                _this.matchHistory = matchHistory;
                _this.emitChange();
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    getState: function () {
        return {
            matchHistory: this.matchHistory
        };
    },
    dehydrate: function () {
        return this.getState();
    },
    rehydrate: function (state) {
        this.matchHistory = state.matchHistory;
    }
});

module.exports = MatchHistoryStore;