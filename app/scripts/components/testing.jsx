var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var RandomString = React.createClass({
  render: function(){
    return (
      <div>
        <p>{(Math.random() / 3.1415926535897932383).toString(36).toUpperCase().slice(18)}</p>
      </div>
    );
  }
});

var TestingComponent = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />

        <RandomString />
      </div>

    );
  }
});

module.exports = {
  TestingComponent: TestingComponent
};
