var Reflux             = require('reflux'),
    updateMatchHistory = require('../actions/updateMatchHistory'),
    Q                  = require('q'),
    $                  = require('jquery'),
    config             = require('../config.json');

var getMatchHistory = function(id) {
    return Q($.ajax({
        url: config.url + config.matchHistory + id,
        dataType: 'JSON',
        data: {
            endIndex: 10
        }
    }));
};

var getPlayerId =function(playerName) {
    return Q($.ajax({
        url: config.url + config.byName + playerName,
        dataType: 'JSON'
    }));
};

var getIdFromDirtyJson = function(data) {
    return data[Object.keys(data)[0]].id;
};


module.exports = Reflux.createStore({
    init: function() {
        this.listenTo(updateMatchHistory, this.output);
    },

    output: function(playerName) {
        var _this = this;
        getPlayerId(playerName)
            .then(getIdFromDirtyJson)
            .then(getMatchHistory)
            .then(function(matchHistory) {
                _this.trigger(matchHistory)
                console.log(matchHistory);
            })
            .catch(function(error) {
                console.log(error);
            })
    }
});