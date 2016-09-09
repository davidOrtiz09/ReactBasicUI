
var React = require('react');
var NewsContainer = require('./NewsContainer');
require('normalize.css/normalize.css');
require('styles/detailsContainer.css');


var  NewsManager = React.createClass({

  render:function() {
    var listData = this.props.data;
    var colorNum = true;
    return(
      <div>
        {listData.map(function(result) {
          colorNum = !colorNum;
                        return <NewsContainer color={colorNum}
                                               title={result.title}
                                               image={result.image}
                                               cont={result.content}
                                               />;
                    })}
      </div>
    );
  }
});

module.exports = NewsManager;
