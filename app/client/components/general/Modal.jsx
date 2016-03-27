Modal = React.createClass({
  propTypes: {
    onCancel: React.PropTypes.func,
    onConfirm: React.PropTypes.func
  },

  onCreateTask() {
    let taskName = document.getElementById('task-name').value

    console.log('task name =>')
    console.log(taskName)
    this.props.onConfirm(taskName)
  },

  onSubmit(e) {
    e.preventDefault()
    this.onCreateTask()
  },

  render() {
    return (
      <div className="c-Modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="exampleModalLabel">New task</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="control-label">Name:</label>
                  <input type="text" className="form-control" id="task-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onCancel}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.onCreateTask}>Create Task</button>
            </div>
          </div>
        </div>
      </div>    
    )
  }

});
