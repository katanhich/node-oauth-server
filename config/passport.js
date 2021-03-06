'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	path = require('path'),
	config = require('./config');

/**
 * Module init function.
 */
module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	// Deserialize sessions
	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	// Initialize all strategies
	config.getGlobbedFiles('./config/strategies/**/*.js').forEach(function(strategy) {
		require(path.resolve(strategy))();
	});
};
