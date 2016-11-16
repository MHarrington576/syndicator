var React = require('react');

var SyndicateListContainer = React.createClass({
  render: function(){
    return (

      <div>
        <div className="well">
          <h1>Syndicator</h1>
          <h4>A customizable team management system</h4>
        </div>
      </div>

    )
  }
});

module.exports = {
  SyndicateListContainer: SyndicateListContainer
}
