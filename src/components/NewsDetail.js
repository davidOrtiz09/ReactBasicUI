
var React = require('react');
require('normalize.css/normalize.css');
require('styles/detailsContainer.css');


var  NewsDetail = React.createClass({

  render:function() {
  if(this.props.show){
    return (
      <div id='panel-details' className='row'>
      <div className='col-xs-4 col-sm-2 col-md-3' id='img-container'>
      <img src={this.props.image} alt="Smiley falcao" id='img-detail' />
      </div>
      <div className='col-xs-8 col-sm-9 col-md-8'>
      <p className='para-news'>
        {this.props.paragraph}
      </p>
      </div>
    </div>
    );
  } else{
    return(<div></div>)
  }
}
});

module.exports = NewsDetail;
