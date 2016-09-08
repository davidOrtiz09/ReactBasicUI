'use strict';
var EventEmitter = require('../emitter');
var AppConstants = require('../constants/AppConstants');


var Store =  function() {
 
	this.emitChange = function() {
    EventEmitter.emit(AppConstants.CHANGE_EVENT);
  },
  this.addChangeListener = function(callback) {
    EventEmitter.on(AppConstants.CHANGE_EVENT, callback);
  },
  this.removeChangeListener = function(callback) {
    EventEmitter.removeListener(AppConstants.CHANGE_EVENT, callback);
  }
};

module.exports = Store;