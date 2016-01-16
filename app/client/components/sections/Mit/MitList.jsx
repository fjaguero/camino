MitList = React.createClass({
  propTypes: {
    mits: React.PropTypes.object
  },

  // Event Handling
  onSaveMits: function(e) {
    e.preventDefault()

    let mit1 = ReactDOM.findDOMNode(this.refs['mit-input-1']).value,
    mit2 = ReactDOM.findDOMNode(this.refs['mit-input-2']).value,
    mit3 = ReactDOM.findDOMNode(this.refs['mit-input-3']).value

    // Save the MITs current values
    mitsArray = []
    mitsArray.push(mit1, mit2, mit3)

    Mits.insert({
      'value': mitsArray,
      'createdAt': new Date(),
      'userId': Meteor.userId()
    })

  },

  onUpdateMits(e) {
    e.preventDefault()

    let mit1 = ReactDOM.findDOMNode(this.refs['mit-input-1']).value,
    mit2 = ReactDOM.findDOMNode(this.refs['mit-input-2']).value,
    mit3 = ReactDOM.findDOMNode(this.refs['mit-input-3']).value

    // Update the MITs with the current values
    mitsArray = []
    mitsArray.push(mit1, mit2, mit3)

    Mits.update(this.props.mits._id, {
      $set: {"value": mitsArray}
    })

  },
  render() {
    let hasValuesForToday = this.props.mits && this.props.mits.value
    let list
    let button

    // Show the tasks for day if we already have them
    if (hasValuesForToday) {
      list = (
        this.props.mits.value.map(function (mit, index) {
            index =  index + 1
            ref = "mit-input-" + index
          return (
            <div key={mit} className="mit__list__element">
              <span>{index}.</span>
              <input
                className="mit__list__element__input"
                ref={ref}
                type="text"
                defaultValue={mit}
              />
            </div>
          )
        })
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
          <div className="mit__list__element">
            <span>1.</span>
            <input className="mit__list__element__input" ref="mit-input-1" type="text" />
          </div>
          <div className="mit__list__element">
            <span>2.</span>
            <input className="mit__list__element__input" ref="mit-input-2" type="text" />
          </div>
          <div className="mit__list__element">
            <span>3.</span>
            <input className="mit__list__element__input" ref="mit-input-3" type="text" />
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
      <div>
        {list}
        {button}
      </div>
    )
  }
});
