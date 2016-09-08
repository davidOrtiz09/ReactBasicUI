
var React = require('react');
var MenuHeader = require('./HeaderMenu');
var NewsManager = require('./NewsManager');
require('normalize.css/normalize.css');
require('styles/App.css');
var titleInfo = 'Falcao pide no ir sentado en el bus de la selección';

var AppComponent =  React.createClass({
  getInitialState: function() {
        return {
            showNews: false
        };
    },
  render:function(){
    if(this.state.showNews){
    return (
      <div id='main'>
        <MenuHeader />
        <div>
        <NewsManager />
        </div>
      </div>
    );
  } else{
    return(
      <div id='main'>
        <MenuHeader />
      </div>
    );
  }
  }
});

module.exports = AppComponent;
