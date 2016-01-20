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

    Gratitude.insert({
      'value': mgtArray,
      'createdAt': new Date(),
      'userId': Meteor.userId()
    })

  },

  onUpdateGratitudes(e) {
    e.preventDefault()

    let mgt1 = ReactDOM.findDOMNode(this.refs['mgt-input-1']).value,
    mgt2 = ReactDOM.findDOMNode(this.refs['mgt-input-2']).value,
    mgt3 = ReactDOM.findDOMNode(this.refs['mgt-input-3']).value

    // Update the MGTs with the current values
    mgtsArray = []
    mgtsArray.push(mgt1, mgt2, mgt3)

    Gratitude.update(this.props.data._id, {
      $set: {"value": mgtsArray}
    })

  },
  render() {
    let hasValuesForToday = this.props.data && this.props.data.value
    let list
    let button

    // Show the tasks for day if we already have them
    if (hasValuesForToday) {
      list = (
        this.props.data.value.map(function (mgt, index) {
            index =  index + 1
            ref = "mgt-input-" + index
            return (
              <div key={mgt} className="mit__list__element">
                <span>{index}.</span>
                <input
                  className="mit__list__element__input"
                  ref={ref}
                  type="text"
                  defaultValue={mgt}
                />
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
          <div className="mit__list__element">
            <span>1.</span>
            <input className="mit__list__element__input" ref="mgt-input-1" type="text" />
          </div>
          <div className="mit__list__element">
            <span>2.</span>
            <input className="mit__list__element__input" ref="mgt-input-2" type="text" />
          </div>
          <div className="mit__list__element">
            <span>3.</span>
            <input className="mit__list__element__input" ref="mgt-input-3" type="text" />
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
      <div>
        {list}
        {button}
      </div>
    )
  }
});
