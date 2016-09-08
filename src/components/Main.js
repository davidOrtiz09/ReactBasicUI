
var React = require('react');
var MenuHeader = require('./HeaderMenu');
var NewsContainer = require('./NewsContainer');
require('normalize.css/normalize.css');
require('styles/App.css');
var titleInfo = 'Falcao pide no ir sentado en el bus de la selección';

var AppComponent =  React.createClass({
  render:function(){
    return (
      <div id='main'>
        <MenuHeader />
        <div>
          <NewsContainer title={titleInfo} color ='0'/>
          <NewsContainer title={titleInfo} color ='1'/>
        </div>
      </div>
    );
  }
});

module.exports = AppComponent;
