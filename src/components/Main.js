
import React from 'react';
import MenuHeader from './HeaderMenu';
import NewsContainer from './NewsContainer';
require('normalize.css/normalize.css');
require('styles/App.css');


class AppComponent extends React.Component {
  render() {
    return (
      <div id="main">
        <MenuHeader />
        <div>
          <NewsContainer />
        </div>
      </div>
    );
  }
}

export default AppComponent;
