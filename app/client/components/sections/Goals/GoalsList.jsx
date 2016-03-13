GoalsList = React.createClass({
  propTypes: {
    goals: React.PropTypes.array
  },

  render() {

    return (
      <ul className="goals__list">
        {
          this.props.goals.map(function(goal, index) {
            if (goal)
              return (
                <li className="goals__list__item" key={goal._id}>
                  <p className="goals__list__type">{goal.type}</p>
                  <span className="goals__list__value">{goal.value}</span>
                </li>
              )
          })
        }
      </ul>
    )

  }

});
