var React = require('react');

function LimitedNav(props){
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
          <h1 id="navbar-logo">Syndicator</h1>
          <ul className="nav navbar-nav all-navbar-links">
            <li>
              <a href="#syndicate/:id/user/:id/dossier" className="navbar-link">
                <i className="fa fa-id-card-o fa-2x" aria-hidden="true"></i>
                <br />
                <span>Dossier</span>
              </a>
            </li>
            <li>
              <a href="#user/:id/war-room" className="navbar-link">
                <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                <br />
                <span>War Room</span>
              </a>
            </li>
            <li>
              <a href="" className="navbar-link">
                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                <br />
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

module.exports = {
  LimitedNav: LimitedNav
};
