
import React from 'react';
import MenuHeader from './HeaderMenu';
import NewsContainer from './NewsContainer';
require('normalize.css/normalize.css');
require('styles/App.css');
var titleInfo = "Falcao pide no ir sentado en el bus de la selección";


class AppComponent extends React.Component {
  render() {
    return (
      <div id="main">
        <MenuHeader />
        <div>
          <NewsContainer title={titleInfo} color ="0"/>
          <NewsContainer title={titleInfo} color ="1"/>
        </div>
      </div>
    );
  }
}

export default AppComponent;
