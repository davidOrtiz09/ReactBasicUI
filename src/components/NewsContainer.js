
var React = require('react');
var sadFalco = 'http://www.las2orillas.co/wp-content/uploads/2014/01/falcao_garcia3.jpg'
var falca = 'Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.'
var Detail =  require('./NewsDetail');
require('normalize.css/normalize.css');
require('styles/newsContainers.css');

var  NewsContainer = React.createClass({
  getInitialState: function() {
        return {
            iconColor:require('../images/BlueArrow.png')
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
      <input className='img-circle' type='image' src={this.state.iconColor} alt='arrow icon' />
      </div>
      <div id='cajita' className='col-xs-8 col-sm-9 col-md-8'>
      <button type='button' className='news-button'>
      {this.props.title}
      </button>
      </div>
    </div>
    <Detail image={sadFalco} show={true} paragraph={falca}/>
  </div>
    );
  }
});

module.exports = NewsContainer;
