'use strict';
var AppDispatcher = require('../dispatcher');
var Store = require('./Store');
let appConstants = require('config/constants.js');
var merge = require('merge');



var newsStore = merge( new Store(),{
    getStateAcces: function() {
        return login_state;
    },
    getFlagState:function(){
    	return flag;
    }
});

function persistLogInData(response){
	if(response === "true"){
          login_state = AppConstants.EXITO;
        } else{
          login_state = AppConstants.ERROR;
        }
}


function adminResponse(response){
	flag = true;
	if(response === "true"){
          admin_state = AppConstants.EXITO;
        } else{
          admin_state = AppConstants.ERROR;
        }


}

AppDispatcher.register(function(payload){
	switch(payload.actionType){
		case AppConstants.LOG_IN :

					persistLogInData(payload.result);
					loginStore.emitChange();

					break;
		case AppConstants.REQ_ADMIN :

           adminResponse(payload.result);
		       loginStore.emitChange();
		            break;

							}

});

module.exports = newsStore;
