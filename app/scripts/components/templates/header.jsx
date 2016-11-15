var React = require('react');

function MainHeader(props){
  return (

    // <nav>
    //   <div className="container-fluid"
    //   <h1>Syndicator</h1>
    //   <h4>A customizable team management system</h4>
    // </nav>

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <h1>Syndicator</h1>
            </li>
            <br />
            <li>
              <h4>A customizable team management system</h4>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  );
}

module.exports = {
  MainHeader: MainHeader
};
