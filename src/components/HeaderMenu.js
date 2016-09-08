
var React = require('react');
var Navbar =  require('react-bootstrap').Navbar;
let menuImage = require('../images/Row-48.png');
require('normalize.css/normalize.css');
require('styles/Menu.css');

var HeaderMenu =  React.createClass({
  render() {
    return (
      <Navbar inverse>
      <input type="image" src={menuImage} alt="menu icon" />
  </Navbar>
    );
  }
});


module.exports = HeaderMenu;
