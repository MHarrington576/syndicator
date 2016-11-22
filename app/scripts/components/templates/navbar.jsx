var React = require('react');

function MainNav(props){
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
            <li>
              <i class="fa fa-university" aria-hidden="true"></i>
              // <br />
              <a href="#">Headquarters</a>
            </li>
            <li>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              // <br />
              <a href="#">Agenda</a>
            </li>
            <li>
              <i class="fa fa-commenting-o" aria-hidden="true"></i>
              // <br />
              <a href="#">Messages</a>
            </li>
            <li>
              <i class="fa fa-globe" aria-hidden="true"></i>
              // <br />
              <a href="#">Deployment</a>
            </li>
            <li>
              <i class="fa fa-address-card-o" aria-hidden="true"></i>
              // <br />
              <a href="#">Dossier</a>
            </li>
            <li>
              <i class="fa fa-lock" aria-hidden="true"></i>
              // <br />
              <button className="btn btn-danger">Log Out</button>
            </li>
            //End custom input here
          </ul>
        </div>
      </div>
    </nav>

  );
}

module.exports = {
  MainNav: MainNav
};
