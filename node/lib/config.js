// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var config, config_secret, _;

  _ = require('underscore');

  config_secret = require('./config_secret');

  config = {
    COUCHDB: {
      HOST: 'localhost',
      PORT: 5984,
      HTTPS: false
    }
  };

  _.extend(config, config_secret);

  module.exports = config;

}).call(this);
