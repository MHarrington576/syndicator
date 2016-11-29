var Backbone = require('backbone');
var React = require('react');

var CreateUserForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    if (document.getElementById('create-option-btn').checked){
      // Send data to Parse Server @ /classes/SyndicatorDossiers .then(vvv)
      Backbone.history.navigate('user/:id/create-syndicate', {trigger: true});
    } else if ((document.getElementById('join-option-btn').checked) && (document.getElementById('code-input') != null)){
      // Send data to Parse Server and add User to selected Syndicate .then(vvv)
      Backbone.history.navigate('syndicate/:id', {trigger: true});
    } else {
      alert ('Please select a choice below.');
    };
  },

  render: function(){
    return (

      <div>
        <div className="row">
          <div className="col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <form id="user-creation-form" encType="multipart/form-data/" onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label htmlFor="first-name-input">Name</label>
                <input className="form-control" id="first-name-input" type="text" name="first-name" placeholder="First" required />
                <input className="form-control" id="last-name-input" type="text" name="last-name" placeholder="Last" required />
              </div>

              <div className="form-group">
                <label htmlFor="avatar-input">Avatar</label>
                <input className="form-control" id="avatar-input" type="file" name="avatar" />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Confirm Email</label>
                <input className="form-control" id="email-input" type="email" name="email" placeholder="example@test.com" />
              </div>

              <div className="form-group">
                <label htmlFor="team-code-input">Are you joining an existing Syndicate&#63; Or starting your own&#63;</label>
                <br />
                <input className="radio-button" id="join-option-btn" type="radio" name="join-option" /><span> Joining a Syndicate</span>
                <br />
                <input className="form-control" id="code-input" type="text" name="code" placeholder="aBc123XyZ" />
                <br />
                <input className="radio-button" id="create-option-btn" type="radio" name="join-option" /><span> Starting my own Syndicate</span>
              </div>

              <input className="btn btn-info" type="submit" name="submit" value="Create Account" />

            </form>
          </div>
        </div>
      </div>

    );
  }
});

var UserCreationContainer = React.createClass({
  render: function(){
    return (

      <div>
        <div className="well">
          <h1>Syndicator</h1>
          <h4>Creating your Account</h4>
        </div>

        <CreateUserForm />

      </div>

    );
  }
});

module.exports = {
  UserCreationContainer: UserCreationContainer
};
