MitList = React.createClass({
  propTypes: {
    mits: React.PropTypes.object
  },

  // Event Handling
  onSaveMits(e) {
    e.preventDefault()

    let mit1 = ReactDOM.findDOMNode(this.refs['mit-input-1']).value,
    mit2 = ReactDOM.findDOMNode(this.refs['mit-input-2']).value,
    mit3 = ReactDOM.findDOMNode(this.refs['mit-input-3']).value

    // Save the MITs current values
    mitsArray = []
    mitsArray.push(mit1, mit2, mit3)

    let mits = {
      'value': mitsArray
    }

    Meteor.call('createMits', mits)
  },

  onMitStatusChange(index) {
    console.log('Mit status')
    console.log(index)
    // Get checked status
    console.log(this.refs["mit-status-" + index].checked)
  },

  onUpdateMits(e) {
    e.preventDefault()

    let mit1 = ReactDOM.findDOMNode(this.refs['mit-input-1']).value,
    mit2 = ReactDOM.findDOMNode(this.refs['mit-input-2']).value,
    mit3 = ReactDOM.findDOMNode(this.refs['mit-input-3']).value

    // Update the MITs with the current values
    mitsArray = []
    mitsArray.push(mit1, mit2, mit3)

    Meteor.call('updateMits', this.props.mits._id, mitsArray)
  },
  render() {
    // FIXME: Refactor
    let hasValuesForToday = this.props.mits && this.props.mits.value
    let list
    let button

    // Show the tasks for day if we already have them
    if (hasValuesForToday) {
      list = (
        this.props.mits.value.map((mit, index) => {
            index =  index + 1
            ref = "mit-input-" + index
            status = "mit-status-" + index

          return (
            <div key={mit} className="row">
              <div className="mit__list__element col-lg-12">
                <div className="input-group">
                  <span className="input-group-addon">
                    <input
                      defaultChecked={mit.completed}
                      type="checkbox"
                      onChange={this.onMitStatusChange.bind(this, index)}
                      ref={status}
                    />
                  </span>
                  <input defaultValue={mit} type="text" className="form-control" ref={ref} />
                </div>
              </div>
            </div>
          )}
        )
      )

      button = (
        <button type="submit" onClick={this.onUpdateMits} className="btn btn-lg btn-block btn-primary">
          Update tasks
        </button>
      )

    } else {

      // Show the form since we don't have tasks for today
      list = (
        <span>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" />
                </span>
                <input type="text" className="form-control" ref="mit-input-1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" />
                </span>
                <input type="text" className="form-control" ref="mit-input-2" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" />
                </span>
                <input type="text" className="form-control" ref="mit-input-3" />
              </div>
            </div>
          </div>

        </span>
      )

      button = (
        <button type="submit" onClick={this.onSaveMits} className="btn btn-lg btn-block btn-primary">
          Continue to day schedule
        </button>
      )
    }

    return (
      <div className="col-lg-12">
        {list}
        {button}
      </div>
    )
  }
});
