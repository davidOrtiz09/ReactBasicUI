'use strict';
var AppDispatcher = require('../dispatcher');
var Store = require('./Store');
let appConstants = require('config/constants');
let merge = require('merge');

var dataNews = [];

var newsStore = merge( new Store(),{
    getNewsDataState: function() {
        return dataNews;
    }
});


function handleData(response){

dataNews = JSON.parse(response);

}

AppDispatcher.register(function(payload){
	switch(payload.actionType){
		case appConstants.START_ALL_STATIC :
          dataNews = payload.result;
					newsStore.emitChange();
					break;
    case appConstants.START_ALL :
      handleData( payload.result);
    newsStore.emitChange();
							}
});

module.exports = newsStore;
