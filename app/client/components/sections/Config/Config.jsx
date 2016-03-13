Camino.Config = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("goals");

    // Get the goals that affect the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    return {
      goals: Goals.findOne({
        'userId': Meteor.userId(),
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      })
    }
  },

  // Event Handling
  onSaveGoal: function(e) {
    e.preventDefault()

    let goalText = ReactDOM.findDOMNode(this.refs['goal-text']).value
    let goalType = ReactDOM.findDOMNode(this.refs['goal-type']).getElementsByTagName('input')[0].value

    goal = {}
    goal.value = goalText
    goal.type = goalType

    Meteor.call('createGoal', goal)
  },

  render() {
    let options = [
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
      { value: 'quarter', label: 'Quarter' },
      { value: 'year', label: 'Year' }
    ];

    let saveButton = (
      <button type="submit" onClick={this.onSaveGoal} className="btn btn-lg btn-block btn-primary">
        Create Goal
      </button>
    )

    return (
      <div className="jumbotron">
          <div className="container">
            <div className="config section__container">
              <h2 className="config__title">Config</h2>
              <h3 className="config__subtitle">Create a Goal</h3>
               <form className="config__form" name="mit" >
                 <input
                   className="config__form__goals-text"
                   type="text"
                   ref="goal-text"
                   placeholder="Set a goal title..."
                 />
               <Select
                  className="config__form__goals-select"
                  ref="goal-type"
                  value={'week'}
                  clearable={false}
                  searchable={false}
                  options={options} />
                 {saveButton}
              </form>
             </div>
          </div>
      </div>
    )
  }

})
