
var React = require('react');
var Navbar =  require('react-bootstrap').Navbar;
let menuImage = require('../images/Row-48.png');
let AppAction = require('actions/AppActions');
require('normalize.css/normalize.css');
require('styles/Menu.css');

var HeaderMenu =  React.createClass({
  render:function() {
    return (
      <Navbar inverse>
      <input type="image" src={menuImage} alt="menu icon" onClick={this.openNews} />
  </Navbar>
    );
  },
  openNews:function(){
    AppAction.startNews();
  }
});


module.exports = HeaderMenu;
