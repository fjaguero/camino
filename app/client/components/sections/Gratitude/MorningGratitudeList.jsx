MorningGratitudeList = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  // Event Handling
  onSaveGratitudes: function(e) {
    e.preventDefault()

    let mgt1 = ReactDOM.findDOMNode(this.refs['mgt-input-1']).value,
    mgt2 = ReactDOM.findDOMNode(this.refs['mgt-input-2']).value,
    mgt3 = ReactDOM.findDOMNode(this.refs['mgt-input-3']).value

    // Save the MGTs current values
    mgtArray = []
    mgtArray.push(mgt1, mgt2, mgt3)

    gratitude = {
      'value': mgtArray
    }

    Meteor.call('createGratitude', gratitude)
  },

  onUpdateGratitudes(e) {
    e.preventDefault()

    let mgt1 = ReactDOM.findDOMNode(this.refs['mgt-input-1']).value,
    mgt2 = ReactDOM.findDOMNode(this.refs['mgt-input-2']).value,
    mgt3 = ReactDOM.findDOMNode(this.refs['mgt-input-3']).value

    // Update the MGTs with the current values
    mgtsArray = []
    mgtsArray.push(mgt1, mgt2, mgt3)

    Meteor.call('updateGratitude', this.props.data._id, mgtsArray)

  },
  render() {
    let hasValuesForToday = this.props.data && this.props.data.value
    let list
    let button

    // Show the tasks for day if we already have them
    if (hasValuesForToday) {
      list = (
        this.props.data.value.map(function (mgt, index) {
            ref = "mgt-input-" + index
            return (
              <div className="row">
                <div key={mgt} className="mit__list__element col-lg-12">
                  <input
                    className="form-control"
                    ref={ref}
                    type="text"
                    defaultValue={mgt}
                  />
                </div>
              </div>
            )

        })
      )

      button = (
        <button type="submit" onClick={this.onUpdateGratitudes} className="btn btn-lg btn-block btn-primary">
          Update gratitude
        </button>
      )

    } else {

      // Show the form since we don't have tasks for today
      list = (
        <span>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input className="form-control" ref="mgt-input-1" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input className="form-control" ref="mgt-input-2" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="mit__list__element col-lg-12">
              <input className="form-control" ref="mgt-input-3" type="text" />
            </div>
          </div>
        </span>
      )

      button = (
        <button type="submit" onClick={this.onSaveGratitudes} className="btn btn-lg btn-block btn-primary">
          Save
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
