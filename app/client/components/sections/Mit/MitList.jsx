MitList = React.createClass({
  propTypes: {
    mits: React.PropTypes.array
  },

  // Event Handling
  onSubmit(e) {
    e.preventDefault()
    this.onUpdateMits()
  },

  onBlur(e) {
    // Update the tasks when focusing out
    this.onUpdateMits()
  }, 

  onUpdateMitStatus(id) {
    let newStatus = this.refs["mit-status-" + id].checked

    Meteor.call('updateMitStatus', id, newStatus)
  },

  onUpdateMits() {
    let mitsArray = []

    for (var i = 0; i < 3; i++) {
      let node = ReactDOM.findDOMNode(this.refs[`mit-input-${i}`])
      let mit = {
        _id: node.getAttribute('data-id'),
        value: node.value
      }

      mitsArray.push(mit)
    }

    Meteor.call('updateMits', mitsArray)
  },

  onSaveMits(e) {
    e.preventDefault()
    let mitsArray = []

    for (var i = 0; i < 3; i++) {
      let mit = {
        value: ReactDOM.findDOMNode(this.refs[`mit-input-${i}`]).value
      }

      mitsArray.push(mit)
    }

    Meteor.call('createMits', mitsArray)
  },

  showButton() {
    if (!this.props.mits.length) {
      return (
        <button type="submit" onClick={this.onSaveMits} className="btn btn-lg btn-block btn-primary">
          Save Today MITs
        </button>
      )
    }
  },

  render() {
    // FIXME: Refactor
    let hasValuesForToday = this.props.mits.length
    let list
    let button

    // Show the tasks for day if we already have them
    if (hasValuesForToday) {
      list = (
        this.props.mits.map((mit, index) => {
          let ref = "mit-input-" + index
          let statusRef = "mit-status-" + mit._id

          return (
            <form onBlur={this.onBlur} onSubmit={this.onSubmit} key={mit._id} className="row">
              <div className="mit__list__element col-lg-12">
                <div className="input-group">
                  <span className="input-group-addon">
                    <input
                      type="checkbox"
                      ref={statusRef}
                      checked={mit.completed}
                      onChange={this.onUpdateMitStatus.bind(this, mit._id)}
                    />
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    ref={ref} 
                    data-id={mit._id}
                    defaultValue={mit.value}
                  />
                </div>
              </div>
            </form>
          )}
        )
      )

    } else {

      // Show the form since we don't have tasks for today
      list = (
        <span>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input placeholder="Start with a quick-win..." type="text" className="form-control" ref="mit-input-0" />
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input placeholder="Then go for a regular task..." type="text" className="form-control" ref="mit-input-1" />
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input placeholder="And finish with a long task..." type="text" className="form-control" ref="mit-input-2" />
            </div>
          </div>

        </span>
      )
    }

    return (
      <div className="col-lg-12">
        {list}
        {this.showButton()}
      </div>
    )
  }
});
