var React = require('react');

// TO LAUNCH:
// <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
//   Launch Modal
// </button>

var AddAnnouncementModal = React.createClass({
  render: function(){
    return (

      <div className="modal fade" id="announcement-modal" tabIndex="-1" role="dialog" aria-labelledby="announcement-modal-title" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="announcement-modal-title">Notify your Syndicate!</h4>
            </div>
            <div className="modal-body">

              <form id="syndicate-creation-form" encType="multipart/form-data/" onSubmit={self.handleSubmit} method="POST">

                <div className="form-group">
                  <label htmlFor="announcement-heading-input">Heading</label>
                  <input className="form-control" id="announcement-heading-input" type="text" name="announcement-heading" required />
                </div>

                <div className="form-group">
                  <label htmlFor="announcement-body-input">Announcement</label>
                  <textarea className="form-control" id="announcement-body-input" type="text" name="announcement-body" required />
                </div>

                <input className="btn btn-info" type="submit" name="submit" value="Create Syndicate" />

              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = {
  AddAnnouncementModal: AddAnnouncementModal
};
