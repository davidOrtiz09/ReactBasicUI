
import React from 'react';
let yeo = require('../images/BlueArrow.png');
require('normalize.css/normalize.css');
require('styles/newsContainers.css');

class NewsContainer extends React.Component {
  render() {
    return (
      <div id="panel-news" className="row">
      <div className="col-md-2">
      <input className="img-circle" type="image" src={yeo} alt="yeoman" />
      </div>
      <div id="cajita" className="col-md-8">
      <button type="button" className="news-button">
      Falcao pide no ir sentado en el bus de la selección
      </button>
      </div>
    </div>
    );
  }
}


export default NewsContainer;
