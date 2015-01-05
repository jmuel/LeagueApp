'use strict';

var Q                  = require('q'),
    $                  = require('jquery'),
    config             = require('../config/config.json');


module.exports = {
    name: 'MatchHistory',
    getMatchHistory: function(id) {
        return Q($.ajax({
            url: config.url + config.matchHistory + id,
            dataType: 'JSON',
            data: {
                endIndex: 10
            }
        }));
    }
    ,

    getPlayerId: function (playerName) {
        return Q($.ajax({
            url: config.url + config.byName + playerName,
            dataType: 'JSON'
        }));
    },

    getIdFromDirtyJson: function(data) {
    return data[Object.keys(data)[0]].id;
    }
}