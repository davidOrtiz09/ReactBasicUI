let request = require('superagent');
let appConstants = require('config/constants.js');
let appDispatcher = require('../dispatcher');

let Api ={
  getNewsOnline:function(){
        request
            .get('http://'+appConstants.IPHost+appConstants.PORT+appConstants.RESOURCE)
            .set('Accept', 'application/json')
            .end(function(err,res){
                this.dispatcher(appConstants.START_ALL,res.text);
            }.bind(this));
    },
      getNewsOffline:function(){

       var mock = require('json!./news_mock.json');
        this.dispatcher(appConstants.START_ALL_STATIC,mock);
      },
dispatcher:function(type,result){
 appDispatcher.dispatch({
 	actionType: type,
 	result: result
 }
 	);
}
};
module.exports = Api;
