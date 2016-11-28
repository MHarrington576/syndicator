var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var TestingComponent = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        
      </div>

    );
  }
});

module.exports = {
  TestingComponent: TestingComponent
};
