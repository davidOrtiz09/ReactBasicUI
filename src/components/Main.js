
var React = require('react');
var MenuHeader = require('./HeaderMenu');
var NewsManager = require('./NewsManager');
var newsStore = require('stores/NewsStore');
require('normalize.css/normalize.css');
require('styles/App.css');
var titleInfo = 'Falcao pide no ir sentado en el bus de la selección';

var AppComponent =  React.createClass({
  getInitialState: function() {
        return {
            showNews: false
        };
    },
    componentDidMount: function() {
        newsStore.addChangeListener(this.fetchNews);
    },
    componentWillUnmount: function() {
        newsStore.removeChangeListener(this.fetchNews);
    },
  render:function(){
    if(this.state.showNews){
    return (
      <div id='main'>
        <MenuHeader />
        <div>
        <NewsManager data={newsStore.getNewsDataState()} />
        </div>
      </div>
    );
  } else{
    return(
      <div id='main'>
        <MenuHeader />
      </div>
    );
  }
},
fetchNews:function(){
  let actualData = newsStore.getNewsDataState();
  if(actualData.length > 0){
    this.setState({showNews:true});
  } else {this.setState({showNews:false});}
}
});

module.exports = AppComponent;
