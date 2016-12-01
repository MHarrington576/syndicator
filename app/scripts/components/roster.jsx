var React = require('react');
require('bootstrap-sass');

var MainNav = require('./templates/navbar.jsx').MainNav;

var RosterContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Riverside HS Speech &amp; Debate Roster</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Authority <i className="fa fa-caret-down" aria-hidden="true" /></th>
              <th>Dossier</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Shane</td>
              <td>Baxter</td>
              <td>Executive</td>
              <td><a href="#syndicate/:id/exec/roster">@sbaxter</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>David</td>
              <td>Dejesa</td>
              <td>Executive</td>
              <td><a href="#syndicate/:id/exec/roster">@ddejesa</a></td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Faith</td>
              <td>Adedokun</td>
              <td>Sponsor</td>
              <td><a href="#syndicate/:id/exec/roster">@fadedokun</a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Angela</td>
              <td>Crocker</td>
              <td>Sponsor</td>
              <td><a href="#syndicate/:id/exec/roster">@acrocker</a></td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>Rachel</td>
              <td>Harrington</td>
              <td>Director</td>
              <td><a href="#syndicate/:id/exec/roster">@rharrington</a></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Faith</td>
              <td>Ingle</td>
              <td>Director</td>
              <td><a href="#syndicate/:id/exec/roster">@fingle</a></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Susan</td>
              <td>Lohman</td>
              <td>Director</td>
              <td><a href="#syndicate/:id/exec/roster">@slohman</a></td>
            </tr>

            <tr>
              <th scope="row">8</th>
              <td>Casey</td>
              <td>Chapman</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@cchapman</a></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Oliver</td>
              <td>Cooper</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@ocooper</a></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Georgina</td>
              <td>Darlene Martin</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@gdarlenemartin</a></td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>George</td>
              <td>DeSouza</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@gdesouza</a></td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Jannette</td>
              <td>Sage</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@jsage</a></td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Hubert</td>
              <td>Trigg</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@htrigg</a></td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Lucia</td>
              <td>Vanderbilt</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@lvanderbilt</a></td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Maurice</td>
              <td>Wallace</td>
              <td>Collaborator</td>
              <td><a href="#syndicate/:id/exec/roster">@mwallace</a></td>
            </tr>
          </tbody>

        </table>

      </div>

    );
  }
});

module.exports = {
  RosterContainer: RosterContainer
};
