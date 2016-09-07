
import React from 'react';
import MenuHeader from './HeaderMenu';
require('normalize.css/normalize.css');
require('styles/App.css');


class AppComponent extends React.Component {
  render() {
    return (
      <div id="main">
        <MenuHeader />
      </div>
    );
  }
}

export default AppComponent;
