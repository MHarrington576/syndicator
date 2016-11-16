var React = require('react');

function MainHeader(props){
  return (

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
            // Begin custom input here
            <li>
              <h1>Syndicator</h1>
            </li>
            //End custom input here
          </ul>
        </div>
      </div>
    </nav>

  );
}

module.exports = {
  MainHeader: MainHeader
};
