GoalsList = React.createClass({
  propTypes: {
    goals: React.PropTypes.array
  },

  onDeleteGoal(id) {
    Meteor.call('deleteGoal', id)
  },

  onCompleteGoal(id) {
    Meteor.call('completeGoal', id)
  },

  showGoal(goal) {
    return ( 
      <li className="goals__list__item" key={goal._id}>
        <span className="goals__list__value">{goal.value}</span>
        <button onClick={this.onDeleteGoal.bind(this, goal._id)} type="button" class="btn btn-default btn-xs">
          <span class="glyphicon glyphicon-remove" aria-hidden="true">x</span>
        </button> 
        <button onClick={this.onCompleteGoal.bind(this, goal._id)} type="button" class="btn btn-default btn-xs">
          <span class="glyphicon glyphicon-remove" aria-hidden="true">Done</span>
        </button>
      </li>
    )
  },

  render() {
    let weekGoals = _.where(this.props.goals, {'type': 'week', 'completed': false})
    let monthGoals = _.where(this.props.goals, {'type': 'month', 'completed': false})

    return (
      <span>
        <ul className="goals__list">
          <p className="goals__list__type">Week</p>
          {weekGoals.map(goal => this.showGoal(goal))} 
        </ul> 
        <ul className="goals__list">
          <p className="goals__list__type">Month</p>
          {monthGoals.map(goal => this.showGoal(goal))} 
        </ul>        
      </span>
    )
  }

});
