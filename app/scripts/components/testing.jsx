var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var TestingComponent = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />

        <a href="" className="btn btn-primary">BACK TO HOME</a>
      </div>

    );
  }
});

module.exports = {
  TestingComponent: TestingComponent
};
