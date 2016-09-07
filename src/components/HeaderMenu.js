
import React from 'react';
var Navbar =  require('react-bootstrap').Navbar;
let menuImage = require('../images/Row-48.png');
require('normalize.css/normalize.css');
require('styles/Menu.css');

class HeaderMenu extends React.Component {
  render() {
    return (
      <Navbar inverse>
      <input type="image" src={menuImage} alt="menu icon" />
  </Navbar>
    );
  }
}


export default HeaderMenu;
