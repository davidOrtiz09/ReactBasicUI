
var React = require('react');
var Detail =  require('./NewsDetail');
require('normalize.css/normalize.css');
require('styles/newsContainers.css');

var  NewsContainer = React.createClass({
  getInitialState: function() {
        return {
            iconColor:require('../images/BlueArrow.png'),
            showNews: false
        };
    },
componentDidMount:function() {
  var desicion = this.props.color;
  if(desicion == '1'){
    this.setState({iconColor:require('../images/GreenArrow.png')});
  }
},
  render:function() {
    return (
      <div>
      <div id='panel-news' className='row'>
      <div className='col-xs-4 col-sm-2 col-md-2'>
      <input className='img-circle' type='image' src={this.state.iconColor} alt='arrow icon' onClick={this.openNews} />
      </div>
      <div id='cajita' className='col-xs-8 col-sm-9 col-md-8'>
      <button type='button' className='news-button' onClick={this.openNews}>
      {this.props.title}
      </button>
      </div>
    </div>
    <Detail image={this.props.image} show={this.state.showNews} paragraph={this.props.cont}/>
  </div>
    );
  },
  openNews:function(){
    this.setState({showNews:!this.state.showNews});
  }
});

module.exports = NewsContainer;
