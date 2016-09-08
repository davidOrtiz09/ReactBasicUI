
let api = require('sources/Api');
let AppAction = {

  startNews:function(){
    api.getNewsOffline();
    //api.getNewsOnline();
  }

};

module.exports = AppAction;
